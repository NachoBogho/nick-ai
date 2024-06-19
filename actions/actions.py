from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import openai
import logging

# Configurar el logger
logger = logging.getLogger(__name__)

class ActionOpenAIResponse(Action):

    def name(self) -> Text:
        return "action_openai_response"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        try:
            user_message = tracker.latest_message.get('text')
            logger.info(f"Mensaje del usuario: {user_message}")

            openai.api_key = 'sk-proj-eIVSLG2FwtQGJJ2XSSQ6T3BlbkFJCZPDPEV44hZbxxWSvJkO'  # Asegúrate de que esta clave sea correcta

            # Consulta las respuestas de domain.yml
            responses = domain.get("responses", {})
            logger.debug(f"Respuestas del domain: {responses}")

            # Genera un prompt basado en el mensaje del usuario y las respuestas del domain.yml
            prompt = f"Usuario: {user_message}\n\nRespuestas posibles:\n"
            for key, response_list in responses.items():
                prompt += f"Respuesta para '{key}':\n"
                for response in response_list:
                    prompt += f"- {response['text']}\n"
            
            prompt += "\nGenera una respuesta humanizada basada en las respuestas proporcionadas."

            logger.debug(f"Prompt enviado a OpenAI: {prompt}")

            # Llamada a la API de OpenAI usando el modelo 'gpt-3.5-turbo'
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a chatbot assistant for a company that develops AI-based chatbots. Detect the user's intent and respond based on provided intents and responses.Respond naturally and conversationally and in spanish. But do not greet in every response or offer help if the user dont asks for it. Use the provided responses to generate a humanized and contextually accurate answer."},
                    {"role": "user", "content": prompt}
                ]
            )

            logger.debug(f"Respuesta de OpenAI: {response}")

            if response.choices and 'message' in response.choices[0] and 'content' in response.choices[0]['message']:
                reply = response.choices[0]['message']['content'].strip()
                logger.info(f"Respuesta generada: {reply}")
                dispatcher.utter_message(text=reply)
            else:
                logger.error(f"Estructura de respuesta inesperada: {response}")
                dispatcher.utter_message(text="Lo siento, ocurrió un error al procesar tu solicitud.")
        except openai.error.OpenAIError as e:
            logger.error(f"Error al llamar a la API de OpenAI: {e}")
            dispatcher.utter_message(text="Lo siento, ocurrió un error al procesar tu solicitud con la API de OpenAI.")
        except Exception as e:
            logger.error(f"Error al ejecutar la acción personalizada: {e}")
            dispatcher.utter_message(text="Lo siento, ocurrió un error al procesar tu solicitud.")

        return []