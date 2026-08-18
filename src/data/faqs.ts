export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFaqs: FAQItem[] = [
  {
    question: "How often should AC servicing be done?",
    answer:
      "For regular residential use, we recommend servicing every 3–4 months. At minimum, service your AC twice a year — once before peak season and once mid-season — to maintain efficiency and catch issues early.",
  },
  {
    question: "How long does AC installation take?",
    answer:
      "Most residential split-unit installations are completed in 3–5 hours. Ducted, cassette and commercial installations can take a full day or more depending on system complexity and site conditions.",
  },
  {
    question: "How do I know if my AC needs gas refill?",
    answer:
      "Common signs include weak or warm airflow despite the unit running, ice forming on the indoor unit or pipework, and a hissing sound near the refrigerant lines. A technician can confirm with a pressure check.",
  },
  {
    question: "Why is my AC leaking water?",
    answer:
      "The most common causes are a blocked condensate drain line, a dirty air filter restricting airflow, or low refrigerant causing the coil to freeze and then drip as it thaws. Our technicians diagnose the exact cause on-site.",
  },
  {
    question: "How much does AC servicing cost?",
    answer:
      "Basic servicing starts from ₹499. Deep cleaning starts from ₹899. Final pricing always depends on unit type, condition, and any additional work identified during inspection.",
  },
  {
    question: "Do you provide emergency service?",
    answer:
      "Yes — our 24/7 emergency line connects you to the next available certified technician for priority dispatch. Emergency service pricing may vary based on time of day and urgency.",
  },
];
