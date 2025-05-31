import { HealthResponse } from '../types';
import healthData from './healthData';

export const getHealthResponse = async (userInput: string): Promise<HealthResponse> => {
  const input = userInput.toLowerCase();
  
  let response: HealthResponse = {
    content: "I don't have specific information about that health concern. Please consult a healthcare professional for personalized advice.",
    recommendations: [
      "Consult with your doctor for personalized advice",
      "Keep track of your symptoms and when they occur",
      "Maintain a healthy lifestyle with balanced diet and exercise"
    ],
    disclaimer: "This is general information only and not a substitute for professional medical advice."
  };
  
  // Emergency conditions check (should be first)
  if (
    input.includes('chest pain') || 
    input.includes('difficulty breathing') || 
    input.includes('unconscious') || 
    input.includes('stroke') || 
    input.includes('severe bleeding') ||
    input.includes('heart attack')
  ) {
    return healthData.emergency;
  }
  
  // Check for various health conditions
  if (input.includes('headache') || input.includes('migraine')) {
    response = healthData.headache;
  }
  else if (input.includes('flu') || input.includes('cold') || input.includes('fever') || input.includes('cough')) {
    response = healthData.flu;
  }
  else if (input.includes('stomach') || input.includes('nausea') || input.includes('vomit') || input.includes('diarrhea')) {
    response = healthData.stomach;
  }
  else if (input.includes('allerg') || input.includes('rash') || input.includes('itch')) {
    response = healthData.allergies;
  }
  else if (input.includes('sleep') || input.includes('insomnia') || input.includes('tired')) {
    response = healthData.sleep;
  }
  else if (input.includes('stress') || input.includes('anxiety') || input.includes('depress') || input.includes('mental')) {
    response = healthData.mentalHealth;
  }
  else if (input.includes('back') || input.includes('spine')) {
    response = healthData.backPain;
  }
  else if (input.includes('diet') || input.includes('nutrition') || input.includes('weight') || input.includes('food')) {
    response = healthData.nutrition;
  }
  else if (input.includes('skin') || input.includes('acne') || input.includes('eczema')) {
    response = healthData.skinCare;
  }
  else if (input.includes('joint') || input.includes('arthritis')) {
    response = healthData.jointPain;
  }
  else if (input.includes('breath') || input.includes('asthma') || input.includes('lung')) {
    response = healthData.respiratory;
  }
  else if (input.includes('heart') || input.includes('blood pressure') || input.includes('cardiovascular')) {
    response = healthData.cardiovascular;
  }
  else if (input.includes('diabetes') || input.includes('blood sugar')) {
    response = healthData.diabetes;
  }
  else if (input.includes('health') || input.includes('healthy') || input.includes('wellness')) {
    response = healthData.generalHealth;
  }
  
  return response;
};