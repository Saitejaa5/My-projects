import { HealthResponse } from '../types';

const healthData: Record<string, HealthResponse> = {
  headache: {
    content: "Headaches can have many causes, including stress, dehydration, lack of sleep, eye strain, or underlying health conditions. Common types include tension headaches, migraines, and cluster headaches.\n\nFor mild to moderate headaches, you might try:",
    recommendations: [
      "Rest in a quiet, dark room",
      "Apply a cold or warm compress to your head or neck",
      "Stay hydrated by drinking plenty of water",
      "Take over-the-counter pain relievers like acetaminophen or ibuprofen as directed",
      "Practice relaxation techniques such as deep breathing or meditation",
      "Maintain regular sleep and meal schedules"
    ],
    disclaimer: "Seek immediate medical attention if your headache is severe, comes on suddenly, or is accompanied by fever, stiff neck, confusion, seizures, double vision, weakness, numbness, or difficulty speaking."
  },
  
  flu: {
    content: "Flu (influenza) is a contagious respiratory illness caused by influenza viruses. Symptoms typically include fever, cough, sore throat, body aches, fatigue, and sometimes vomiting and diarrhea.\n\nTo manage flu symptoms:",
    recommendations: [
      "Rest and get plenty of sleep",
      "Stay hydrated by drinking clear fluids like water, broth, or sports drinks",
      "Take over-the-counter medications like acetaminophen or ibuprofen to reduce fever and relieve pain",
      "Use a humidifier to ease congestion and coughing",
      "Stay home to avoid spreading the illness to others",
      "Consider antiviral medications if prescribed by a doctor (most effective when started early)"
    ],
    disclaimer: "Seek medical attention if you experience difficulty breathing, persistent chest pain, confusion, severe vomiting, or if symptoms improve but then return with fever and worse cough."
  },
  
  stomach: {
    content: "Stomach issues like nausea, vomiting, or diarrhea can be caused by viral or bacterial infections, food poisoning, motion sickness, or underlying conditions. Most cases resolve on their own within a few days.\n\nTo manage stomach problems:",
    recommendations: [
      "Stay hydrated with small sips of clear liquids like water, broth, or electrolyte solutions",
      "Eat bland, easy-to-digest foods (BRAT diet: bananas, rice, applesauce, toast) when returning to eating",
      "Avoid dairy, fatty, spicy, or highly seasoned foods",
      "Avoid caffeine, alcohol, and nicotine",
      "Get plenty of rest",
      "Try over-the-counter medications like bismuth subsalicylate (Pepto-Bismol) for diarrhea or antiemetics for nausea"
    ],
    disclaimer: "Seek medical attention if you experience severe abdominal pain, blood in vomit or stool, signs of dehydration (extreme thirst, dry mouth, little or no urination), fever above 102°F, or if symptoms persist beyond 2-3 days."
  },
  
  allergies: {
    content: "Allergies occur when your immune system reacts to a foreign substance that doesn't cause a reaction in most people. Common allergens include pollen, pet dander, certain foods, and insect stings.\n\nTo manage allergies:",
    recommendations: [
      "Identify and avoid known allergens when possible",
      "Use over-the-counter antihistamines, decongestants, or nasal sprays as directed",
      "Try saline nasal irrigation to clear allergens from nasal passages",
      "Keep windows closed during high pollen seasons",
      "Use air purifiers with HEPA filters in your home",
      "Shower and change clothes after being outdoors during high pollen times",
      "Consider allergy testing to identify specific triggers"
    ],
    disclaimer: "Seek emergency medical help if you experience severe allergic reactions (anaphylaxis) with symptoms like difficulty breathing, swelling of face/throat, rapid pulse, dizziness, or rash. If you have a known severe allergy, use an epinephrine auto-injector (EpiPen) if available and call emergency services."
  },
  
  sleep: {
    content: "Sleep problems can include difficulty falling asleep, staying asleep, or getting quality sleep. Poor sleep can affect your health, mood, and daily functioning.\n\nTo improve sleep quality:",
    recommendations: [
      "Maintain a consistent sleep schedule (go to bed and wake up at the same time daily)",
      "Create a restful environment that's dark, quiet, and comfortable",
      "Limit exposure to screens (phones, TV, computers) at least 1 hour before bedtime",
      "Avoid caffeine, alcohol, and large meals close to bedtime",
      "Exercise regularly, but not too close to bedtime",
      "Try relaxation techniques like deep breathing, meditation, or gentle stretching before bed",
      "Consider cognitive behavioral therapy for insomnia (CBT-I)"
    ],
    disclaimer: "Consult a healthcare provider if sleep problems persist despite trying these measures, or if you experience symptoms of sleep disorders like sleep apnea (loud snoring, gasping for air during sleep, excessive daytime sleepiness)."
  },
  
  mentalHealth: {
    content: "Mental health encompasses emotional, psychological, and social well-being. Common concerns include stress, anxiety, and depression, which can affect how we think, feel, and act.\n\nFor managing mental health:",
    recommendations: [
      "Practice regular self-care activities you enjoy",
      "Maintain social connections and talk about your feelings with trusted people",
      "Practice stress-reduction techniques like meditation, deep breathing, or yoga",
      "Maintain a regular sleep schedule and healthy diet",
      "Engage in regular physical activity",
      "Limit alcohol and avoid recreational drugs",
      "Set realistic goals and priorities",
      "Consider professional help from a therapist, counselor, or psychiatrist"
    ],
    disclaimer: "If you're having thoughts of harming yourself or others, seek emergency help immediately by calling a crisis helpline or going to your nearest emergency room. Mental health conditions are medical conditions that benefit from professional treatment."
  },
  
  backPain: {
    content: "Back pain is a common issue that can result from muscle strain, poor posture, injury, or underlying conditions. Most cases of acute back pain resolve with self-care.\n\nTo manage back pain:",
    recommendations: [
      "Apply ice for the first 48-72 hours, then switch to heat",
      "Take over-the-counter pain relievers like ibuprofen or acetaminophen",
      "Stay active with gentle movement, but avoid activities that worsen pain",
      "Maintain good posture when sitting and standing",
      "Sleep on a medium-firm mattress in a position that's comfortable",
      "Try gentle stretching exercises for the back",
      "Consider physical therapy for persistent pain"
    ],
    disclaimer: "Seek immediate medical attention if your back pain follows a fall or injury, is accompanied by fever, causes bowel or bladder problems, is severe or worsens when you lie down, or spreads down one or both legs, especially if it extends below the knee."
  },
  
  nutrition: {
    content: "Good nutrition is essential for overall health and can help prevent many chronic diseases. A balanced diet should include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.\n\nFor better nutrition:",
    recommendations: [
      "Eat a variety of colorful fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Include lean protein sources like fish, poultry, beans, and nuts",
      "Limit processed foods, added sugars, and sodium",
      "Stay hydrated by drinking plenty of water throughout the day",
      "Practice portion control and mindful eating",
      "Consider consulting with a registered dietitian for personalized advice"
    ],
    disclaimer: "Nutrition needs vary based on individual factors like age, sex, activity level, and health conditions. Consult with a healthcare provider before making significant changes to your diet, especially if you have a medical condition or take medications."
  },
  
  skinCare: {
    content: "Skin problems can range from acne and eczema to rashes and infections. Proper skin care and hygiene are essential for maintaining healthy skin.\n\nFor better skin health:",
    recommendations: [
      "Wash your face twice daily with a gentle cleanser",
      "Use sunscreen daily (SPF 30 or higher)",
      "Keep skin moisturized, especially after washing",
      "Avoid touching your face frequently",
      "Stay hydrated and eat a balanced diet",
      "Get adequate sleep and manage stress",
      "Use non-comedogenic products if prone to acne"
    ],
    disclaimer: "See a dermatologist if you have persistent skin problems, unusual changes in moles, or severe acne that doesn't respond to over-the-counter treatments."
  },
  
  jointPain: {
    content: "Joint pain can be caused by injury, arthritis, or other inflammatory conditions. It can affect mobility and quality of life.\n\nTo manage joint pain:",
    recommendations: [
      "Apply ice to reduce swelling and heat for stiffness",
      "Maintain a healthy weight to reduce stress on joints",
      "Exercise regularly with low-impact activities",
      "Use proper posture and body mechanics",
      "Consider physical therapy or gentle stretching",
      "Try over-the-counter pain relievers as directed",
      "Use assistive devices if needed"
    ],
    disclaimer: "Seek medical attention if joint pain is severe, accompanied by significant swelling, redness, or warmth, or if it affects your daily activities."
  },
  
  respiratory: {
    content: "Respiratory issues can include asthma, bronchitis, or other breathing difficulties. These conditions can affect oxygen intake and overall health.\n\nFor respiratory health:",
    recommendations: [
      "Avoid smoking and exposure to secondhand smoke",
      "Use air purifiers and keep living spaces well-ventilated",
      "Practice deep breathing exercises",
      "Stay up to date with vaccinations",
      "Exercise regularly as tolerated",
      "Follow prescribed medication plans",
      "Monitor air quality and avoid triggers"
    ],
    disclaimer: "Seek immediate medical attention if you experience severe shortness of breath, chest pain, or inability to speak in full sentences due to breathing difficulties."
  },
  
  cardiovascular: {
    content: "Heart health is crucial for overall well-being. Cardiovascular issues can include high blood pressure, heart disease, and circulation problems.\n\nFor heart health:",
    recommendations: [
      "Maintain regular physical activity",
      "Eat a heart-healthy diet low in saturated fats",
      "Monitor blood pressure regularly",
      "Manage stress effectively",
      "Limit alcohol consumption",
      "Quit smoking if applicable",
      "Get regular check-ups"
    ],
    disclaimer: "Call emergency services immediately if you experience chest pain, shortness of breath, pain in arms/jaw, or other signs of heart attack."
  },
  
  diabetes: {
    content: "Diabetes management involves controlling blood sugar levels through diet, exercise, and medication if prescribed.\n\nFor diabetes management:",
    recommendations: [
      "Monitor blood sugar levels as recommended",
      "Follow a balanced meal plan",
      "Exercise regularly",
      "Take medications as prescribed",
      "Check feet daily for cuts or sores",
      "Maintain regular medical check-ups",
      "Keep a diabetes management log"
    ],
    disclaimer: "Seek immediate medical attention for very high or low blood sugar levels, or if you develop signs of diabetic complications."
  },
  
  emergency: {
    content: "⚠️ MEDICAL EMERGENCY WARNING ⚠️\n\nThe symptoms you've described may indicate a serious medical emergency that requires immediate professional attention.",
    recommendations: [
      "Call emergency services (911 in the US) immediately",
      "Do not drive yourself to the hospital",
      "Stay on the phone with emergency services and follow their instructions",
      "If available and appropriate, take aspirin for suspected heart attack",
      "If trained, perform CPR if someone is unconscious and not breathing normally",
      "Try to stay calm and provide clear information to emergency responders"
    ],
    disclaimer: "This is an emergency situation requiring immediate professional medical attention. Do not delay seeking help by consulting this app further."
  }
};

export default healthData;