const scheduledTasks = [
  { customer: 'Max Mustermann', brand: 'BMW', serviceType: 'Ölwechsel', duration: 2, urgent: false, parts: ['Ölfilter', 'Motoröl', 'Ablassschraube'] },
  { customer: 'Anna Schmidt', brand: 'Audi', serviceType: 'Inspektion', duration: 3, urgent: true, parts: ['Inspektionskit', 'Zündkerzen', 'Luftfilter'] },
  { customer: 'Fritz Müller', brand: 'Mercedes', serviceType: 'Reparatur', duration: 1, urgent: true, parts: ['Bremsbeläge', 'Bremsflüssigkeit'] },
  { customer: 'Sabine Wagner', brand: 'Volkswagen', serviceType: 'Inspektion', duration: 4, urgent: false, parts: ['Inspektionskit', 'Luftfilter', 'Pollenfilter'] },
  { customer: 'Julia Becker', brand: 'Toyota', serviceType: 'Ölwechsel', duration: 2, urgent: false, parts: ['Ölfilter', 'Motoröl 5W-30'] },
  { customer: 'Michael Schneider', brand: 'Ford', serviceType: 'Reparatur', duration: 5, urgent: true, parts: ['Kupplung', 'Ausgleichsscheibe', 'Lagerkugel'] },
  { customer: 'Laura Keller', brand: 'Opel', serviceType: 'Inspektion', duration: 3, urgent: false, parts: ['Inspektionskit', 'Zündkerzen'] },
  { customer: 'Simon Hofmann', brand: 'Renault', serviceType: 'Reparatur', duration: 2, urgent: true, parts: ['Dichtung', 'Ventildeckel'] },
  { customer: 'Sarah Lehmann', brand: 'Honda', serviceType: 'Lackieren', duration: 4, urgent: false, parts: ['Autolack', 'Grundierung', 'Schleifmittel'] },
  { customer: 'Tobias Maier', brand: 'Nissan', serviceType: 'Ölwechsel', duration: 1, urgent: false, parts: ['Ölfilter', 'Motoröl'] },
  { customer: 'Vanessa Huber', brand: 'Mazda', serviceType: 'Reparatur', duration: 3, urgent: true, parts: ['Lager', 'Wellenseal', 'Feder'] },
  { customer: 'Lisa Schulz', brand: 'Hyundai', serviceType: 'Inspektion', duration: 2, urgent: false, parts: ['Inspektionskit', 'Luftfilter'] },
  { customer: 'Martin Fischer', brand: 'Kia', serviceType: 'Ölwechsel', duration: 2, urgent: true, parts: ['Ölfilter', 'Motoröl Premium'] },
  { customer: 'Jessica Wolf', brand: 'Subaru', serviceType: 'Reparatur', duration: 4, urgent: false, parts: ['Schalldämpfer', 'Auspuffrohr'] },
  { customer: 'Patrick Werner', brand: 'Volvo', serviceType: 'Inspektion', duration: 3, urgent: false, parts: ['Inspektionskit', 'Zündkerzen', 'Luftfilter'] },
  { customer: 'Nicole Mayer', brand: 'Tesla', serviceType: 'Reparatur', duration: 6, urgent: true, parts: ['Batteriemodul', 'Sicherung', 'Kabelstrang'] },
  { customer: 'Markus Schmitt', brand: 'Porsche', serviceType: 'Inspektion', duration: 2, urgent: false, parts: ['Premium Inspektionskit', 'Hochleistungs-Zündkerzen'] },
  { customer: 'Laura Berger', brand: 'Ferrari', serviceType: 'Reparatur', duration: 8, urgent: true, parts: ['Hochleistungs-Bremsanlage', 'Federmodul', 'Federn aus Titanlegierung'] },
  { customer: 'Jan Becker', brand: 'Lamborghini', serviceType: 'Tieferlegen', duration: 5, urgent: false, parts: ['Sportfedern', 'Stossdämpfer', 'Tieferlegungskit'] },
  { customer: 'Carina Schulze', brand: 'Bugatti', serviceType: 'Reparatur', duration: 10, urgent: true, parts: ['Carbon-Bremsscheiben', 'Spezial-Getriebeöl', 'Turbo-Komponenten'] },
  { customer: 'Andreas Meier', brand: 'McLaren', serviceType: 'Inspektion', duration: 4, urgent: false, parts: ['High-Tech Inspektionskit', 'Premium Zündkerzen', 'Carbon-Luftfilter'] }
];

// 1.
console.log(scheduledTasks.filter((task) => task.serviceType === "Ölwechsel" && task.brand === "Kia"));