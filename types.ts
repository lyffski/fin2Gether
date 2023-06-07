export interface OverlappingDivProps {
  text: string;
  details:
    | IDetailsWeightLoss
    | IDetailsHair
    | IDetailsPlasticSurgery
    | IDetailsDentistry
    | IDetailsAboutUs;
}

export interface IDetailsWeightLoss {
  details1: string;
  link1: string;
  details2: string;
  link2: string;
  details3: string;
  link3: string;
  details4: string;
  link4: string;
  details5: string;
  link5: string;
  details6: string;
  link6: string;
  details7: string;
  link7: string;
  details8: string;
  link8: string;
}

export interface IDetailsHair {
  details1: string;
  link1: string;
  details2: string;
  link2: string;
  details3: string;
  link3: string;
  details4: string;
  link4: string;
  details5: string;
  link5: string;
  details6: string;
  link6: string;
  details7: string;
  link7: string;
}

export interface IDetailsPlasticSurgery {
  details1: string;
  link1: string;
  details2: string;
  link2: string;
  details3: string;
  link3: string;
  details4: string;
  link4: string;
  details5: string;
  link5: string;
  details6: string;
  link6: string;
  details7: string;
  link7: string;
  details8: string;
  link8: string;
  details9: string;
  link9: string;
  details10: string;
  link10: string;
  details11: string;
  link11: string;
  details12: string;
  link12: string;
  details13: string;
  link13: string;
  details14: string;
  link14: string;
  details15: string;
  link15: string;
}

export interface IDetailsDentistry {
  details1: string;
  link1: string;
  details2: string;
  link2: string;
  details3: string;
  link3: string;
}

export interface IDetailsAboutUs {
  details1: string;
  link1: string;
  details2: string;
  link2: string;
  details3: string;
  link3: string;
  details4: string;
  link4: string;
  details5: string;
  link5: string;
  details6: string;
  link6: string;
  details7: string;
  link7: string;
  details8: string;
  link8: string;
}
// DOD OT :: / // 
export const dObjWeigthLoss: IDetailsWeightLoss = {
  details1: "Gastric Sleeve Surgery",
  link1: "../WeightLoss/GastricSleeveSurgery",
  details2: "Gastric Bypass Surgery",
  link2: "../WeightLoss/GastricBypassSurgery",
  details3: "Transit Bipartition",
  link3: "../WeightLoss/TransitBipartition",
  details4: "Revision Surgery",
  link4: "../WeightLoss/RevisionSurgery",
  details5: "Bariatric Surgery",
  link5: "../WeightLoss/BariatricSurgery",
  details6: "FAQ Weigth-loss surgery",
  link6: "../WeightLoss/WeightLossFAQ",
  details7: "Health Insuracne Coverage",
  link7: "../WeightLoss/HealthInsurance",
  details8: "Weight Loss Guidance",
  link8: "../WeightLoss/WeightLossGuidance",
};

export const dObjHair: IDetailsHair = {
  details1: "DHI Hair Transplant",
  link1: " ../Hair/DHIHairTransplant",
  details2: "Sapphire FUE Hair Transplant",
  link2: " ../Hair/SapphireFUEHairTransplant",
  details3: "Beard Transplant",
  link3: " ../Hair/BeardTransplant",
  details4: "Eyebrow Transplant",
  link4: " ../Hair/EyebrowTransplant",
  details5: "Hair Analysis",
  link5: " ../Hair/HairAnalysis",
  details6: "Graft Calculation",
  link6: " ../Hair/GraftCalculation",
  details7: "Pre-care and after-Guidance",
  link7: " ../Hair/HairCare",
};

export const dObjPlasticSurgery: IDetailsPlasticSurgery = {
  details1: "Arm Lift",
  link1: "../PlasticSurgery/ArmLift",
  details2: "Tummy Tuck",
  link2: "../PlasticSurgery/TummyTuck",
  details3: "Breast Lift",
  link3: "../PlasticSurgery/BreastLift",
  details4: "Breast Augmentation",
  link4: "../PlasticSurgery/BreastAugmentation",
  details5: "Brest Reduction",
  link5: "../PlasticSurgery/BreastReduction",
  details6: "Blepahroplasty",
  link6: "../PlasticSurgery/Blepahroplasty",
  details7: "Mommy Make-Over",
  link7: "../PlasticSurgery/MommyMakeOver",
  details8: "Rhinoplasty",
  link8: "../PlasticSurgery/Rhinoplasty",
  details9: "Thight Lift",
  link9: "../PlasticSurgery/ThightLift",
  details10: "Liposuction",
  link10: "../PlasticSurgery/Liposuction",
  details11: "Ear Correction",
  link11: "../PlasticSurgery/EarCorrection",
  details12: "Brazilian Butt Lift",
  link12: "../PlasticSurgery/BrazilianButtLift",
  details13: "Face Lift",
  link13: "../PlasticSurgery/FaceLift",
  details14: "Ear Correction",
  link14: "../PlasticSurgery/EarCorrection",
  details15: "Gynecomastia",
  link15: "../PlasticSurgery/Gynecomastia",
};

export const dObjDentistry: IDetailsDentistry = {
  details1: "Dental Implants",
  link1: "../Dentistry/DentalImplants",
  details2: "Veneers",
  link2: "../Dentistry/Veneers",
  details3: "Crowns",
  link3: "../Dentistry/Crowns",
};

export const dObjAboutUs: IDetailsAboutUs = {
  details1: "About Beautyyou",
  link1: "../AboutUs/AboutUs",
  details2: "Contact",
  link2: "../AboutUs//Contact",
  details3: "Our Team",
  link3: "../AboutUs//OurTeam",
  details4: "Quality Management & ISO 9001",
  link4: "../AboutUs//QualityManagement",
  details5: "Follow-up in Germany",
  link5: "../AboutUs//FollowUp",
  details6: "Nutrition & Diet Support",
  link6: "../AboutUs//Nutrition",
  details7: "Follow-up Insurance in Germany",
  link7: "../AboutUs//FollowUpInsurance",
  details8: "Financing Options",
  link8: "../AboutUs//Financing",
};

