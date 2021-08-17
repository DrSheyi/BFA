    
                var globalAge;
                var globalSex;
                var idList1 = [];
                var idList2 = [];
                var idListFin = []; 
                var jsonData = {};
                /**
                 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
                 * 
                 * @returns {Boolean} True if only alphabetical characters else false
                 */
                function validateFirstName(){
                   if(/^[A-Za-z\s]+$/.test(healthDemo.firstName.value)){
                       return (true);
                   }

                   alert("Invalid Character, Please enter only letters!");
                   return (false);
                }
               
                /**
                 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
                 * 
                 * @returns {Boolean} True if only alphabetical characters else false
                 */
                function validateLastName(){
                   if(/^[A-Za-z\s]+$/.test(healthDemo.lastName.value)){
                       return (true);
                   }

                   alert("Invalid Character, Please enter only letters!");
                   return (false);
                }     
                /**
                 * Combines the user's entered first and last name into one string. 
                 * Then uses that string to display the full name on the results page.
                 *  
                 * @param string firstName User's first name
                 * @param string lastName Usser's last name
                 */
                function combineName(firstName, lastName){
                var fullName = firstName + " " + lastName;
                document.getElementById("fullName").innerHTML = fullName;
                }
           
                function updateGlobalAge(){
                    globalAge = healthDemo.age.value;
                }
           
                /**
                 * Validates the email address follows the proper format for an email address. Prints an alert if not correct
                 * 
                 * @returns {Boolean} True if valid email else false
                 */
                function validateEmail() 
                {
                 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(healthDemo.email.value))
                  {
                    return (true);
                  }
                    alert("You have entered an invalid email address!");
                    return (false);
                }
           
                function updateGlobalSex(){
                    globalSex = healthDemo.sex.value;
                }
           
                function ethnicityOther(){
                    if(document.getElementById("ethnicity").value == "Other")
                        document.getElementById("ethnicityOtherText").style.display = "block";
                    else document.getElementById("ethnicityOtherText").style.display = "none";
                }
           
                function setHeight(){
                    document.getElementById("heightText").innerHTML = healthDemo.height.value;
                }
           
                function setWeight(){
                    document.getElementById("weightText").innerHTML = healthDemo.weight.value;
                }
            
                function allergiesSpecify(){
                    if(document.getElementById("allergyYes").checked)
                        document.getElementById("allergiesText").style.display = "block";
                    else{
                        document.getElementById("allergiesText").style.display = "none";
                        document.getElementById("allergiesText").value = "";
                    }
                }
            
                function medicationSpecify(){
                    if(document.getElementById("medicationYes").checked)
                        document.getElementById("medicationText").style.display = "block";
                    else{
                        document.getElementById("medicationText").style.display = "none";
                        document.getElementById("medicationText").value="";
                    }
                }
            
                function nonMedicationSpecify(){
                    if(document.getElementById("nonMedicationYes").checked)
                        document.getElementById("nonMedicationText").style.display = "block";
                    else{
                        document.getElementById("nonMedicationText").style.display = "none";
                        document.getElementById("nonMedicationText").value = "";
                    }
                }
            
                function danceHistoryOther(){
                    if(document.getElementById("historyOther").checked)
                        document.getElementById("historyOtherText").style.display = "block";
                    else{
                        document.getElementById("historyOtherText").style.display = "none";
                        document.getElementById("historyOtherText").value = "";
                    }
                }
            
                function extraProgramOthers(){
                    if(document.getElementById("extraProgramOther").checked)
                        document.getElementById("extraProgramOtherText").style.display = "block";
                    else{
                        document.getElementById("extraProgramOtherText").style.display = "none";
                        document.getElementById("extraProgramOtherText").value = "";
                    }
                }
            
                function continuedProblems(){
                    if(document.getElementById("problemYes").checked)
                        document.getElementById("continuedProblemText").style.display = "block";
                    else{
                        document.getElementById("continuedProblemText").style.display = "none";
                        document.getElementById("continuedProblemText").value = "";
                    }
                }
            
                function otherInjury(){
                    if(document.getElementById("otherInjuriesYes").checked)
                        document.getElementById("otherInjuriesText").style.display = "block";
                    else{
                        document.getElementById("otherInjuriesText").style.display = "none";
                        document.getElementById("otherInjuriesText").value = "";
                    }
                }
           
                function worryTexts(){
                 if(document.getElementById("worryYes").checked)
                     document.getElementById("worryText").style.display = "block";
                 else
                     document.getElementById("worryText").style.display = "none";
                     document.getElementById("worryText").value = "";
                }
            
                function validateHealthDemo(){
                     if(healthDemo.firstName.value == ""){
                         alert("First name must be filled out");
                         return false;
                     }
                     if(healthDemo.lastName.value == ""){
                         alert("Last name must be filled out");
                         return false;
                     }
                     if(healthDemo.age.value == ""){
                         alert("Age must be filled out");
                         return false;
                     }
                     if(healthDemo.yesConsent.checked == false && healthDemo.noConsent.checked == false){
                         alert("Consent must be checked");
                         return false;
                     }
                     if(!validateEmail()){
                         return false;
                     }
                     if(healthDemo.email.value == ""){
                         alert("Email must be filled out");
                         return false;
                     }
                     if(healthDemo.height.value == ""){
                         alert("Height must be filled out");
                         return false;
                     }
                     if(healthDemo.weight.value == ""){
                         alert("Weight must be filled out");
                         return false;
                     }
                     if(healthDemo.highSchool.checked == false && healthDemo.college.checked == false && healthDemo.graduateSchool.checked == false){
                         alert("Please select your Education");
                         return false;
                     }
                     if(healthDemo.excellent.checked == false && healthDemo.good.checked == false && healthDemo.fair.checked == false && healthDemo.poor.checked == false){
                         alert("Please select a state of health");
                         return false;
                     }
                     if(healthDemo.highBloodPressure.checked === false && healthDemo.epilepsySeizures.checked === false && healthDemo.dizzinessFainting.checked === false && 
                             healthDemo.scoliosis.checked === false && healthDemo.shortnessOfBreath.checked === false && healthDemo.depression.checked === false && 
                             healthDemo.concussion.checked === false && healthDemo.diabetes.checked === false && healthDemo.heartDisease.checked === false && 
                             healthDemo.cancer.checked === false && healthDemo.stressFractures.checked === false && healthDemo.chestPain.checked === false && 
                             healthDemo.bipolarDisorder.checked === false && healthDemo.asthma.checked === false && healthDemo.arthritis.checked === false && healthDemo.fatigueBox.checked === false && 
                             healthDemo.thyroid.checked === false && healthDemo.migraines.checked === false && healthDemo.visualProblems.checked === false && 
                             healthDemo.stroke.checked === false && healthDemo.heatStroke.checked === false && healthDemo.healthNone.checked === false){
                         alert("Please select the conditions that apply to you");
                         return false;
                     }
                     if(healthDemo.SDYes.checked == false && healthDemo.SDNo.checked == false){
                         alert("Please indicate if any family members or relatives died before the age of 50");
                         return false;
                     }
                     if(healthDemo.marfansYes.checked == false && healthDemo.marfansNo.checked == false){
                         alert("Please select an option for Marfans Syndrome");
                         return false;
                     }
                     if(healthDemo.CPYes.checked == false && healthDemo.CPNo.checked == false && healthDemo.CPUnsure.checked == false){
                         alert("Please indicate if you had Chicken Pox, Mumps, Measles, or Rubella");
                         return false;
                     }
                     if(healthDemo.CPVYes.checked == false && healthDemo.CPVNo.checked == false && healthDemo.CPVUnsure.checked == false){
                         alert("Please indicate if you have been vaccinated as a kid for Chicken Pox, Mumps, Measles, or Rubella");
                         return false;
                     }
                     if(healthDemo.VYes.checked == false && healthDemo.VNo.checked == false && healthDemo.VUnsure.checked == false){
                         alert("Please indicate if you are up to date on vaccines");
                         return false;
                     }
                     if(healthDemo.allergyYes.checked == false && healthDemo.allergyNo.checked == false){
                         alert("Please select if you have allergies");
                         return false;
                     }
                     if(healthDemo.epiYes.checked == false && healthDemo.epiNo.checked == false){
                         alert("Please select if you need an Epipen");
                         return false;
                     }
                     if(healthDemo.haveEpiYes.checked == false && healthDemo.haveEpiNo.checked == false){
                         alert("Please select if you have an Epipen");
                         return false;
                     }
                     if(healthDemo.medicationYes.checked == false && healthDemo.medicationNo.checked == false){
                         alert("Please select if you are taking prescription medication");
                         return false;
                     }
                     if(healthDemo.nonMedicationYes.checked == false && healthDemo.nonMedicationNo.checked == false){
                         alert("Please select if you are take non prescription medication");
                         return false;
                     }
                     if(healthDemo.historyStudent.checked == false && healthDemo.historyCorpsDancer.checked == false && healthDemo.historySoloist.checked == false &&
                        healthDemo.historyPrincipalDancer.checked == false && healthDemo.historyGuestArtist.checked == false && healthDemo.historyTeacher.checked == false &&
                        healthDemo.historyChoreographer.checked == false && healthDemo.historyOther.checked == false){
                        alert("Please select your dance performance history");
                        return false;
                     }
                     if(healthDemo.workProfessional.checked == false && healthDemo.workFreelance.checked == false && healthDemo.workRecreational.checked == false &&
                        healthDemo.workStudent.checked == false){
                        alert("Please select your type of dance work");
                        return false;
                     }
                     if(healthDemo.currentCompany.value == ""){
                         alert("Please enter current company or school name");
                         return false;
                     }
                     if(healthDemo.previousCompany.value == ""){
                         alert("Please enter your previous company or school name");
                         return false;
                     }
                     if(healthDemo.ballet.checked == false && healthDemo.modern.checked == false && healthDemo.lyrical.checked == false &&
                        healthDemo.contemporary.checked == false && healthDemo.theatrical.checked == false && healthDemo.tap.checked == false &&
                        healthDemo.jazz.checked == false && healthDemo.folk.checked == false && healthDemo.ethnic.checked == false && healthDemo.flamenco.checked == false &&
                        healthDemo.hipHop.checked == false && healthDemo.ballroom.checked == false){
                        alert("Please select your type of dance training");
                        return false;
                     }
                     if(healthDemo.beganTraining.value == ""){
                         alert("Please indicate when you began training");
                         return false;
                     }
                     if(healthDemo.continuousYes.checked == false && healthDemo.continuousNo.checked == false){
                         alert("Please select if your training has been continuous");
                         return false;
                     }
                     if(healthDemo.pointeYes.checked == false && healthDemo.pointeNo.checked == false){
                         alert("Please select if you do pointe work");
                         return false;
                     }
                     if(healthDemo.numberOfYearsDancing.value == ""){
                         alert("Please enter the total number of years you've been dancing");
                         return false;
                     }
                     if(healthDemo.numberOfYearsProDancing.value == ""){
                         alert("Please enter the total number of years you've been pro dancing");
                         return false;
                     }
                     if(healthDemo.performingYes.checked == false && healthDemo.performingNo.checked == false){
                         alert("Please select if you are currently performing");
                         return false;
                     }
                     if(healthDemo.rehearsalHours.value == ""){
                         alert("Please enter the number of hours you rehearse per day");
                         return false;
                     }
                     if(healthDemo.dancePerDay.value == ""){
                         alert("Please enter the number of dance classes you take per day");
                         return false;
                     }
                     if(healthDemo.performancesPerMonth.value == ""){
                         alert("Please enter the number of performances per month");
                         return false;
                     }
                     if(healthDemo.tourWeeks.value == ""){
                         alert("Please enter the number of weeks on tour per year");
                         return false;
                     }
                     if(healthDemo.rehearsalHours.value == ""){
                         alert("Please enter the number of hours you rehearse per day");
                         return false;
                     }
                     if(healthDemo.companyEmployedWeeks.value == ""){
                         alert("Please enter the number of weeks you are employed per contract year");
                         return false;
                     }
                     if(healthDemo.noChange.checked == false && healthDemo.gradualIncrease.checked == false && healthDemo.suddenIncrease.checked == false && healthDemo.gradualDecrease.checked == false && healthDemo.suddenDecrease.checked == false){
                         alert("Please select in what way your dance schedule has changed in the last 6 months");
                         return false;
                     }
                     if(healthDemo.offSeasonYes.checked == false && healthDemo.offSeasonNo.checked == false){
                         alert("Please select if you participate in preseason activities");
                         return false;
                     }
                     if(healthDemo.extraNone.checked == false && healthDemo.gym.checked == false && healthDemo.running.checked == false && healthDemo.resistance.checked == false && 
                             healthDemo.yoga.checked == false && healthDemo.swimming.checked == false && healthDemo.weightLifting.checked == false && 
                             healthDemo.cycling.checked == false && healthDemo.feldenkrais.checked == false && healthDemo.walking.checked == false && 
                             healthDemo.plyometric.checked == false && healthDemo.pilates.checked == false && healthDemo.extraProgramOther.checked == false){
                         alert("Please select the type of programs you regularly participate in");
                         return false;
                     }
                     if(healthDemo.cardioTrainingPerWeek.value == ""){
                         alert("Please enter your hours per week of cardiovascular training");
                         return false;
                     }
                     if(healthDemo.crossTrainingPerWeek.value == ""){
                         alert("Please enter your hours per week of other cross-training");
                         return false;
                     }
                     if(healthDemo.warmUpYes.checked == false && healthDemo.warmUpNo.checked == false){
                         alert("Please select if you warm up before class");
                         return false;
                     }
                     if(healthDemo.injuryPerformance.checked == false && healthDemo.injuryRehearsal.checked == false && healthDemo.injuryClass.checked == false && 
                             healthDemo.injuryWork.checked == false && healthDemo.injurySports.checked == false && healthDemo.injuryNone.checked == false){
                         alert("Please select if you sustained any musculoskeletal injuries in the last 12 months");
                         return false;
                     }
                     if(healthDemo.injuryDiagnosis.value == ""){
                         alert("Please indicate the the diagnosis of the musculoskeletal injury sustained");
                         return false;
                     }
                     if(healthDemo.injuryWherePerformance.checked == false && healthDemo.injuryWhereRehearsal.checked == false && healthDemo.injuryWhereClass.checked == false && 
                             healthDemo.injuryWhereWork.checked == false && healthDemo.injuryWhereSports.checked == false && healthDemo.injuryWhereNone.checked == false){
                         alert("Please select where you sustained the musculoskeletal injury");
                         return false;
                     }
                     if(healthDemo.surgeryYes.checked == false && healthDemo.surgeryNo.checked == false){
                         alert("Please select if you had surgery for the injuries mentioned");
                         return false;
                     }
                     if(healthDemo.rehabYes.checked == false && healthDemo.rehabNo.checked == false){
                         alert("Please select if you had any rehabilitation for the injuries sustained");
                         return false;
                     }
                     if(healthDemo.problemYes.checked == false && healthDemo.problemNo.checked == false){
                         alert("Please select if there are continuing problems from your injury");
                         return false;
                     }
                     if(healthDemo.otherInjuriesYes.checked == false && healthDemo.otherInjuriesNo.checked == false){
                         alert("Please select if you have had any other injuries that we should know about");
                         return false;
                     }
                     if(healthDemo.lossYes.checked == false && healthDemo.lossNo.checked == false){
                         alert("Please selec if in the past year, have you had a loss of friend(s), or family, or partner/spouse, or pet through death, separation, change in relationship or relocation");
                         return false;
                     }
                     if(healthDemo.counselingYes.checked == false && healthDemo.counselingNo.checked == false){
                         alert("Please select if you feel you would benefit from counseling");
                         return false;
                     }
                     if(healthDemo.fatigueYes.checked == false && healthDemo.fatigueNo.checked == false){
                         alert("Please select if you suffer from fatigue");
                         return false;
                     }
                     if(healthDemo.sleepingYes.checked == false && healthDemo.sleepingNo.checked == false){
                         alert("Please select if you have trouble sleeping");
                         return false;
                     }
                     if(healthDemo.deprivedYes.checked == false && healthDemo.deprivedNo.checked == false){
                         alert("Please select if you are sleep deprived");
                         return false;
                     }
                     if(healthDemo.nutritionYes.checked == false && healthDemo.nutritionNo.checked == false){
                         alert("Please select if you are interested in nutritional counseling");
                         return false;
                     }
                     if(healthDemo.smokingYes.checked == false && healthDemo.smokingNo.checked == false){
                         alert("Please select if you smoke cigarettes");
                         return false;
                     }
                     if(healthDemo.cessationYes.checked == false && healthDemo.cessationNo.checked == false){
                         alert("Please select if you interested in smoking cessation information");
                         return false;
                     }
                     if(healthDemo.drinksPerDay.value == ""){
                         alert("Please enter how many alcoholic drinks you have in a day");
                         return false;
                     }
                     if(healthDemo.drugUse.value == ""){
                         alert("Please enter how mant times in a week you use drugs");
                         return false;
                     }
                     if(healthDemo.worryYes.checked == false && healthDemo.worryNo.checked == false){
                         alert("Please select if you worry about any aspect of your health");
                         return false;
                     }
                    document.getElementById("healthDemo").style.display = "none";
                    document.getElementById("BFA").style.display = "block";
                    combineName(healthDemo.firstName.value, healthDemo.lastName.value);
                    setHeight();
                    setWeight();
                    
                    Object.values(healthDemo.children).map(item=>item.id!==""?idList1.push(item.id):console.log(""))
                    console.log(idList1)
                }
           
                function fitnessCategory(age, sex, recovery){
                    var fitnessCategory;
                    if(sex == "Male"){
                        if(age >=18 && age <= 25){
                            if(recovery < 79)
                                fitnessCategory = 0;
                            else if(recovery >= 79 && recovery <= 89)
                                fitnessCategory = 1;
                            else if(recovery >= 90 && recovery <=99)
                                fitnessCategory = 2;
                            else if(recovery >= 100 && recovery <= 105)
                                fitnessCategory = 3;
                            else if(recovery >= 106 && recovery <= 116)
                                fitnessCategory = 4;
                            else if(recovery >= 117 && recovery <= 128)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 26 && age <= 35){
                            if(recovery < 81)
                                fitnessCategory = 0;
                            else if(recovery >= 81 && recovery <= 89)
                                fitnessCategory = 1;
                            else if(recovery >= 90 && recovery <=99)
                                fitnessCategory = 2;
                            else if(recovery >= 100 && recovery <= 107)
                                fitnessCategory = 3;
                            else if(recovery >= 108 && recovery <= 117)
                                fitnessCategory = 4;
                            else if(recovery >= 118 && recovery <= 128)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 36 && age <= 45){
                            if(recovery < 83)
                                fitnessCategory = 0;
                            else if(recovery >= 83 && recovery <= 96)
                                fitnessCategory = 1;
                            else if(recovery >= 97 && recovery <= 103)
                                fitnessCategory = 2;
                            else if(recovery >= 104 && recovery <= 112)
                                fitnessCategory = 3;
                            else if(recovery >= 113 && recovery <= 119)
                                fitnessCategory = 4;
                            else if(recovery >= 120 && recovery <= 130)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 46 && age <= 55){
                            if(recovery < 87)
                                fitnessCategory = 0;
                            else if(recovery >= 87 && recovery <= 97)
                                fitnessCategory = 1;
                            else if(recovery >= 98 && recovery <= 105)
                                fitnessCategory = 2;
                            else if(recovery >= 106 && recovery <= 116)
                                fitnessCategory = 3;
                            else if(recovery >= 117 && recovery <= 122)
                                fitnessCategory = 4;
                            else if(recovery >= 123 && recovery <= 132)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 56 && age <= 65){
                            if(recovery < 86)
                                fitnessCategory = 0;
                            else if(recovery >= 86 && recovery <= 97)
                                fitnessCategory = 1;
                            else if(recovery >= 98 && recovery <= 103)
                                fitnessCategory = 2;
                            else if(recovery >= 104 && recovery <= 112)
                                fitnessCategory = 3;
                            else if(recovery >= 113 && recovery <= 120)
                                fitnessCategory = 4;
                            else if(recovery >= 121 && recovery <= 129)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                    }
                    if(sex == "Female"){
                        if(age >=18 && age <= 25){
                            if(recovery < 85)
                                fitnessCategory = 0;
                            else if(recovery >= 85 && recovery <= 98)
                                fitnessCategory = 1;
                            else if(recovery >= 99 && recovery <= 108)
                                fitnessCategory = 2;
                            else if(recovery >= 109 && recovery <= 117)
                                fitnessCategory = 3;
                            else if(recovery >= 118 && recovery <= 126)
                                fitnessCategory = 4;
                            else if(recovery >= 127 && recovery <= 140)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 26 && age <= 35){
                            if(recovery < 88)
                                fitnessCategory = 0;
                            else if(recovery >= 88 && recovery <= 99)
                                fitnessCategory = 1;
                            else if(recovery >= 100 && recovery <= 111)
                                fitnessCategory = 2;
                            else if(recovery >= 112 && recovery <= 119)
                                fitnessCategory = 3;
                            else if(recovery >= 120 && recovery <= 126)
                                fitnessCategory = 4;
                            else if(recovery >= 127 && recovery <= 138)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 36 && age <= 45){
                            if(recovery < 90)
                                fitnessCategory = 0;
                            else if(recovery >= 90 && recovery <= 102)
                                fitnessCategory = 1;
                            else if(recovery >= 103 && recovery <= 110)
                                fitnessCategory = 2;
                            else if(recovery >= 111 && recovery <= 118)
                                fitnessCategory = 3;
                            else if(recovery >= 119 && recovery <= 128)
                                fitnessCategory = 4;
                            else if(recovery >= 129 && recovery <= 140)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 46 && age <= 55){
                            if(recovery < 94)
                                fitnessCategory = 0;
                            else if(recovery >= 94 && recovery <= 104)
                                fitnessCategory = 1;
                            else if(recovery >= 105 && recovery <= 115)
                                fitnessCategory = 2;
                            else if(recovery >= 116 && recovery <= 120)
                                fitnessCategory = 3;
                            else if(recovery >= 121 && recovery <= 126)
                                fitnessCategory = 4;
                            else if(recovery >= 127 && recovery <= 135)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                        else if(age >= 56 && age <= 65){
                            if(recovery < 95)
                                fitnessCategory = 0;
                            else if(recovery >= 95 && recovery <= 104)
                                fitnessCategory = 1;
                            else if(recovery >= 105 && recovery <= 112)
                                fitnessCategory = 2;
                            else if(recovery >= 113 && recovery <= 118)
                                fitnessCategory = 3;
                            else if(recovery >= 119 && recovery <= 128)
                                fitnessCategory = 4;
                            else if(recovery >= 129 && recovery <= 139)
                                fitnessCategory = 5;
                            else
                                fitnessCategory = 6;
                        }
                    }
                    return fitnessCategory;
                }
            
                function postureScore(){
                    var sum = 0;
                    if(document.getElementById("forwardHeadS1").checked || document.getElementById("forwardHeadS2").checked)
                        sum+=1;
                    if(document.getElementById("forwardHeadF1").checked || document.getElementById("forwardHeadF2").checked)
                        sum+=1;
                    if(document.getElementById("shouldersLevel1").checked || document.getElementById("shouldersLevel2").checked)
                        sum+=1;
                    if(document.getElementById("thoracicKyphosis1").checked || document.getElementById("thoracicKyphosis2").checked)
                        sum+=1;
                    if(document.getElementById("lumbarLordosis1").checked || document.getElementById("lumbarLordosis2").checked)
                        sum+=1;
                    if(document.getElementById("iliacCrestsLevel1").checked || document.getElementById("iliacCrestsLevel2").checked)
                        sum+=1;
                    if(sum >= 3){
                        return "Needs work";
                    } else {
                        return "Excellent";
                    }
                }
                
                function legLengthYN(){
                    if(document.getElementById("iliacCrestsLevel1").checked || document.getElementById("iliacCrestsLevel2").checked){
                        return "Yes";
                    }
                    else return "No";
                }
                
                function legLengthScore(){
                    if(document.getElementById("iliacCrestsLevel1").checked)
                        return "Min";
                    else if(document.getElementById("iliacCrestsLevel2").checked)
                        return "Mod";
                    else return "";
                }
           
                function genuRecurvartumOutput(){
                    if(BFA.genuRecurvatumY.checked)
                        return "Yes";
                    else return "No";
                }
           
                function pronationYN(){
                    if(BFA.footAlignmentPronation.checked)
                        return "Yes";
                    else return "No";
                }
            
                function scoliosisScore(){
                    if(BFA.scoliosis1.checked)
                        return "Min";
                    else if(BFA.scoliosis2.checked)
                        return "Mod";
                    else return "";
                 
                }
           
                function badAlignmentToggle(){
                    if(BFA.kneeAlignmentN.checked){
                        document.getElementById("badAlignmentNA").style.display= "block";
                        document.getElementById("badAlignmentNALabel").style.display= "block";
                        document.getElementById("badAlignmentValgus").style.display= "block";
                        document.getElementById("badAlignmentValgusLabel").style.display= "block";
                        document.getElementById("badAlignmentVarus").style.display= "block";
                        document.getElementById("badAlignmentVarusLabel").style.display= "block";
                    }else{
                        document.getElementById("badAlignmentNA").style.display= "none";
                        document.getElementById("badAlignmentNALabel").style.display= "none";
                        document.getElementById("badAlignmentValgus").style.display= "none";
                        document.getElementById("badAlignmentValgusLabel").style.display= "none";
                        document.getElementById("badAlignmentVarus").style.display= "none";
                        document.getElementById("badAlignmentVarusLabel").style.display= "none";
                    }
                }
            
                function kneeAlignmentScore(){
                    if(BFA.badAlignmentVarus.checked){
                        return "Varus Stress";
                    }else if(BFA.badAlignmentValgus.checked){
                        return "Valgus";
                    }else return "Good";
                }
           
                function flexibilityScore(){
                    if(BFA.generalFlexibility.value == "Palms Behind Feet")
                        return "Excellent";
                    else if(BFA.generalFlexibility.value == "Palms to Floor")
                        return "Good";
                    else return "Needs work";
                }
            
                function turnoutProblem(){
                    var diff = Math.abs(BFA.leftTurnout.value - BFA.rightTurnout.value);
                    if(diff > 10){
                        return "Problem: " + diff + " degree discrepancy between R and L";
                    }
                    else return "";
                }
           
                function discsProblem(){
                    var diff = Math.abs(BFA.leftDiscs.value - BFA.rightDiscs.value);
                    if(diff > 10){
                        return "Problem: " + diff + " degree discrepancy between R and L";
                    }
                    else return "";
                }
          
                function passeProblem(){
                    if(BFA.leftPasse.value < 60 || BFA.rightPasse.value < 60)
                        return "Problem";
                    else return "";
                }
           
            
          
                function psoasLeftTightFunc(){
                    if(BFA.psoasLeft.value == "Tight"){
                        BFA.psoasLeftAngle.style.display = "inline-block";
                    }else {
                        BFA.psoasLeftAngle.style.display = "none";

                    }
                }
                
                function psoasRightTightFunc(){
                    if(BFA.psoasRight.value == "Tight"){
                        BFA.psoasRightAngle.style.display = "inline-block";
                    }else {
                        BFA.psoasRightAngle.style.display = "none";
                    }
                }
            
                function rfLeftTightFunc(){
                    if(BFA.rfLeft.value == "Tight"){
                        BFA.rfLeftAngle.style.display = "inline-block";
                        
                    }else {
                        BFA.rfLeftAngle.style.display = "none";
                        
                    }
                }
                function rfRightTightFunc(){
                    if(BFA.rfRight.value == "Tight"){
                        BFA.rfRightAngle.style.display = "inline-block";
                        
                    }else {
                        BFA.rfRightAngle.style.display = "none";
                        
                    }
                }
         
                function itbLeftTightFunc(){ 
                    if(BFA.itbLeft.value == "Tight"){
                        BFA.itbLeftAngle.style.display = "inline-block";
                       
                    }else {
                        BFA.itbLeftAngle.style.display = "none";
                        
                    }
                }
                function itbRightTightFunc(){
                    if(BFA.itbRight.value == "Tight"){
                        BFA.itbRightAngle.style.display = "inline-block";
                        
                    }else {
                        BFA.itbRightAngle.style.display = "none";
                        
                    }
                }
           
                function hamstringScore(input){
                    if(input > 120){
                        return "Excellent";
                    }else if(input <=119 && input >= 110){
                        return "Good";
                    }else return "Needs Work";
                }
                
                function hamstringProblem(){
                    var diff = Math.abs(BFA.SLRLeft.value - BFA.SLRRight.value);
                    if(diff > 10){
                        return "Problem: " + diff + " degree discrepancy between R and L";
                    }else return "";
                }
         
                function irProblem(){
                    if(BFA.proneIRLeft.value < 45 || BFA.proneIRRight.value < 45)
                        return "IR Needs Work";
                    else return "";
                }
           
                function erProblem(){
                    if(BFA.proneERLeft.value < 45 || BFA.proneERRight.value < 45)
                        return "ER Needs Work";
                    else return "";
                }
                
                function irerProblem(){
                    var leftDiff = Math.abs(BFA.proneERLeft.value - BFA.proneIRLeft.value);
                    var rightDiff = Math.abs(BFA.proneERRight.value - BFA.proneIRRight.value);
                    if(leftDiff >= 10)
                        return "Problem " + leftDiff + " degree discrepancy between R and L";
                    else if(rightDiff >= 10)
                        return "Problem " + rightDiff + " degree discrepancy between R and L";
                    else return "";
                }
            
                function kneeExtInterpret(input){
                    if(input > 0){
                        return "Flex Contract";
                    }else if(input <=0 && input >= -5){
                        return "WNL";
                    }else return "Hyper";
                }
                
                function beightonKnee(input){
                    if (input <= -10){
                        return true;
                    }else return false
                }
           
                function beightonScore(){
                    var sum = 0;
                    var result;
                    
                    if(BFA.leftPassiveDF.value == "Yes")
                        sum += 1;
                    if(BFA.rightPassiveDF.value == "Yes")
                        sum += 1;
                    if(BFA.leftPassiveApp.value == "Yes")
                        sum += 1;
                    if(BFA.rightPassiveApp.value == "Yes")
                        sum += 1;
                    if(BFA.leftHyperextension.value == "Yes")
                        sum += 1;
                    if(BFA.rightHyperextension.value == "Yes")
                        sum += 1;
                    if(beightonKnee(BFA.leftKneeExt.value))
                        sum+=1;
                    if(beightonKnee(BFA.rightKneeExt.value))
                        sum+=1;
                    if(BFA.generalFlexibility.value == "Palms Behind Feet" || BFA.generalFlexibility.value == "Palms to Floor")
                        sum+=1;
                    
                    if(sum >= 4){
                        return result = {
                            Grade: "Gen Laxity",
                            Score: sum};
                        
                    }else return result = {
                            Grade: "WNL",
                            Score: sum};
                }
            
                function allInterpretation(){
                    var interpret;
                    var deg = document.getElementById("ALL").value;
                    
                    if(deg == 0){
                        interpret = {
                            grade: 5,
                            gradeW: "Normal"
                        };
                    }
                    else if (deg > 0 && deg<=30){
                        interpret = {
                            grade: 4,
                            gradeW: "Good"
                        };
                    }
                    else if (deg > 30 && deg <= 60){
                        interpret = {
                            grade: 3,
                            gradeW: "Fair"
                        };
                    }
                    else {
                        interpret = {
                            grade: 2,
                            gradeW: "Needs Work"
                        };
                    }
                    return interpret;
                }
            
                function leftHipFlex(){
                    if(BFA.leftHipFlex4m.checked){
                        return "Needs Work";
                    }else if(BFA.leftHipFlex4.checked)
                        return "Average";
                    else return "Good";
                }
                
                function rightHipFlex(){
                    if(BFA.rightHipFlex4m.checked){
                        return "Needs Work";
                    }else if(BFA.rightHipFlex4.checked)
                        return "Average";
                    else return "Good";
                }
                
                function leftHipExtRotate(){
                    if(BFA.leftHipExtRotate4m.checked){
                        return "Needs Work";
                    }else if(BFA.leftHipExtRotate4.checked)
                        return "Average";
                    else return "Good";
                }
                
                function rightHipExtRotate(){
                    if(BFA.rightHipExtRotate4m.checked){
                        return "Needs Work";
                    }else if(BFA.rightHipExtRotate4.checked)
                        return "Average";
                    else return "Good";
                }
                
                function leftHipIntRotate(){
                    if(BFA.leftHipIntRotate4m.checked){
                        return "Needs Work";
                    }else if(BFA.leftHipIntRotate4.checked)
                        return "Average";
                    else return "Good";
                }
                
                function rightHipIntRotate(){
                    if(BFA.rightHipIntRotate4m.checked){
                        return "Needs Work";
                    }else if(BFA.rightHipIntRotate4.checked)
                        return "Average";
                    else return "Good";
                }

                function leftHipAbd(){
                 if(BFA.leftHipAbd4m.checked){
                     return "Needs Work";
                 }else if(BFA.leftHipAbd4.checked)
                     return "Average";
                 else return "Good";
                }
                
                function rightHipAbd(){
                 if(BFA.rightHipAbd4m.checked){
                     return "Needs Work";
                 }else if(BFA.rightHipAbd4.checked)
                     return "Average";
                 else return "Good";
                }
                
                function leftHipAdd(){
                 if(BFA.leftHipAdd4m.checked){
                     return "Needs Work";
                 }else if(BFA.leftHipAdd4.checked)
                     return "Average";
                 else return "Good";
                }
                
                function rightHipAdd(){
                 if(BFA.rightHipAdd4m.checked){
                     return "Needs Work";
                 }else if(BFA.rightHipAdd4.checked)
                     return "Average";
                 else return "Good";
                }
                
                function leftKneeFlex(){
                 if(BFA.leftKneeFlex4m.checked){
                     return "Needs Work";
                 }else if(BFA.leftKneeFlex4.checked)
                     return "Average";
                 else return "Good";
                }
                
                function rightKneeFlex(){
                 if(BFA.rightKneeFlex4m.checked){
                     return "Needs Work";
                 }else if(BFA.rightKneeFlex4.checked)
                     return "Average";
                 else return "Good";
                }
                
                
            
                function anklePlantarResult(input){
                    if(input >= 25){
                        return "Excellent";
                    }else if(input >= 17 && input <= 24)
                        return "Good";
                    else{
                        return "Needs Work";
                    }
                }
             
                
                function validateBFA(){
                    if(BFA.restingBP.value == ""){
                        alert("Resting BP needs to be filled out");
                        return false;
                    }
                    if(BFA.restingHR.value == ""){
                        alert("Resting HR needs to be filled out");
                        return false;
                    }
                    if(BFA.maxHR.value == ""){
                        alert("Max HR needs to be filled out");
                        return false;
                    }
                    if(BFA.recovery1Min.value == ""){
                        alert("Recovery 1 minute needs to be filled out");
                        return false;
                    }
                    if(BFA.forwardHeadS0.checked == false && BFA.forwardHeadS1.checked == false && BFA.forwardHeadS2.checked == false){
                        alert("Please select an option for Forward Head Sagittal");
                        return false;
                    }
                    if(BFA.forwardHeadF0.checked == false && BFA.forwardHeadF1.checked == false && BFA.forwardHeadF2.checked == false){
                        alert("Please select an option for Forward Head Frontal");
                        return false;
                    }
                    if(BFA.shouldersLevel0.checked == false && BFA.shouldersLevel1.checked == false && BFA.shouldersLevel2.checked == false){
                        alert("Please select an option for Shoulders Level");
                        return false;
                    }
                    if(BFA.thoracicKyphosis0.checked == false && BFA.thoracicKyphosis1.checked == false && BFA.thoracicKyphosis2.checked == false){
                        alert("Please select an option for Thoracic Kyphosis");
                        return false;
                    }
                    if(BFA.lumbarLordosis0.checked == false && BFA.lumbarLordosis1.checked == false && BFA.lumbarLordosis2.checked == false){
                        alert("Please select an option for Lumbar Lordosis");
                        return false;
                    }
                    if(BFA.iliacCrestsLevel0.checked == false && BFA.iliacCrestsLevel1.checked == false && BFA.iliacCrestsLevel2.checked == false){
                        alert("Please select an option for Iliac Crests Level");
                        return false;
                    }
                    
                    if(BFA.kneesGenuVarus.checked == false && BFA.kneesGenuValgus.checked == false){
                        alert("Please select an option for Knees");
                        return false;
                    }
                    
                    if(BFA.genuRecurvatumY.checked == false && BFA.genuRecurvatumN.checked == false){
                        alert("Please select an option for Genu Recurvatum");
                        return false;
                    }
                    
                    if(BFA.tibialTorsionY.checked == false && BFA.tibialTorsionN.checked == false){
                        alert("Please select an option for Tibial Torsion");
                        return false;
                    }
                    
                    if(BFA.footAlignmentCavus.checked == false && BFA.footAlignmentNormal.checked == false && BFA.footAlignmentPronation.checked == false){
                        alert("Please select an option for Foot Alignment");
                        return false;
                    }
                    
                    if(BFA.halluxValgusY.checked == false && BFA.halluxValgusN.checked == false){
                        alert("Please select an option for Hallux Valgus");
                        return false;
                    }
                    
                    if(BFA.scoliosis0.checked == false && BFA.scoliosis1.checked == false && BFA.scoliosis2.checked == false){
                        alert("Please select an option for Scoliosis: Adam's forward bending");
                        return false;
                    }
                    if(BFA.kneeAlignmentY.checked == false && BFA.kneeAlignmentN.checked == false){
                        alert("Please select an option for Knees Good Alignment");
                        return false;
                    }
                    if(BFA.fingersToLeg.checked == false && BFA.fingersToToes.checked == false && BFA.fingersToFloor.checked == false && BFA.PalmsToFloor.checked == false && BFA.PalmsBehindFeet.checked == false){
                        alert("Please select an option for General flexibility Forward Bending");
                        return false;
                    }
                    if(BFA.leftTurnout.value == ""){
                        alert("Please fill out Preferred 1st Position Turnout Left");
                        return false;
                    }
                    if(BFA.rightTurnout.value == ""){
                        alert("Please fill out Preferred 1st Position Turnout Right");
                        return false;
                    }
                    if(BFA.leftDiscs.value == ""){
                        alert("Please fill out Preferred 1st Position Discs Left");
                        return false;
                    }
                    if(BFA.rightDiscs.value == ""){
                        alert("Please fill out Preferred 1st Position Discs Right");
                        return false;
                    }
                    if(BFA.leftPasse.value==""){
                        alert("Please fill out 1-legged Parallel Passe Left");
                        return false;
                    }
                    if(BFA.rightPasse.value==""){
                        alert("Please fill out 1-legged Parallel Passe Right");
                        return false;
                    }
                    if(BFA.SLRLeft.value == ""){
                        alert("SLR HS Left needs to be filled out");
                        return false;
                    }
                    if(BFA.SLRRight.value == ""){
                        alert("SLR HS Right needs to be filled out");
                        return false;
                    }
                    if(BFA.psoasLeftWNL.checked == false && BFA.psoasLeftTight.checked == false){
                        alert("Please select an option for Left Psoas");
                        return false;
                    }
                    if(BFA.psoasRightWNL.checked == false && BFA.psoasRightTight.checked == false){
                        alert("Please select an option for Right Psoas");
                        return false;
                    }
                    if(BFA.rfLeftWNL.checked == false && BFA.rfLeftTight.checked == false){
                        alert("Please select an option for Left Rectus Femoris");
                        return false;
                    }
                    if(BFA.rfRightWNL.checked == false && BFA.rfRightTight.checked == false){
                        alert("Please select an option for Right Rectus Femoris");
                        return false;
                    }
                    if(BFA.itbLeftWNL.checked == false && BFA.itbLeftTight.checked == false){
                        alert("Please select an option for Left Iliotibial Band");
                        return false;
                    }
                    if(BFA.itbRightWNL.checked == false && BFA.itbRightTight.checked == false){
                        alert("Please select an option for Right Iliotibial Band");
                        return false;
                    }
                    if(BFA.hipGrindLeftPos.checked == false && BFA.hipGrindLeftNeg.checked == false){
                        alert("Please select an option for Left Hip Grind");
                        return false;
                    }
                    if(BFA.hipGrindRightPos.checked == false && BFA.hipGrindRightNeg.checked == false){
                        alert("Please select an option for Right Hip Grind");
                        return false;
                    }
                    if(BFA.proneIRLeft.value == ""){
                        alert("Prone IR Left needs to be filled out");
                        return false;
                    }
                    if(BFA.proneIRRight.value == ""){
                        alert("Prone IR Right needs to be filled out");
                        return false;
                    }
                    if(BFA.proneERLeft.value == ""){
                        alert("Prone ER Left needs to be filled out");
                        return false;
                    }
                    if(BFA.proneERRight.value == ""){
                        alert("Prone ER Right needs to be filled out");
                        return false;
                    }
                    if(BFA.leftKneeExt.value == ""){
                        alert("Please fill out Knee Ext (supine) Left");
                        return false;
                    }
                    if(BFA.rightKneeExt.value == ""){
                        alert("Please fill out Knee Ext (supine) Right");
                        return false;
                    }
                    if(BFA.pfLeftWNL.checked == false && BFA.pfLeftLim.checked == false){
                        alert("Please select an option for PF Left");
                        return false;
                    }
                    if(BFA.pfRightWNL.checked == false && BFA.pfRightLim.checked == false){
                        alert("Please select an option for PF Right");
                        return false;
                    }
                    if(BFA.firstMtpDFLeft90.checked == false && BFA.firstMtpDFLeftPlus.checked == false){
                        alert("Please select an option for 1st Mtp DF Left");
                        return false;
                    }
                    if(BFA.firstMtpDFRight90.checked == false && BFA.firstMtpDFRightPlus.checked == false){
                        alert("Please select an option for 1st Mtp DF Right");
                        return false;
                    }
                    if(BFA.leftPassiveDFY.checked == false && BFA.leftPassiveDFN.checked == false){
                        alert("Please select an option for Left Passive DF of 5th finger MCP beyond 90 degrees");
                        return false;
                    }
                    if(BFA.rightPassiveDFY.checked == false && BFA.rightPassiveDFN.checked == false){
                        alert("Please select an option for Right Passive DF of 5th finger MCP beyond 90 degrees");
                        return false;
                    }
                    if(BFA.leftPassiveAppY.checked == false && BFA.leftPassiveAppN.checked == false){
                        alert("Please select an option for Left Passive apposition of thumb to flexor aspect of forearm");
                        return false;
                    }
                    if(BFA.rightPassiveAppY.checked == false && BFA.rightPassiveAppN.checked == false){
                        alert("Please select an option for Right Passive apposition of thumb to flexor aspect of forearm");
                        return false;
                    }
                    if(BFA.leftHyperextensionY.checked == false && BFA.leftPassiveAppN.checked == false){
                        alert("Please select an option for Left Hyperextension of elbow beyond 10 degrees");
                        return false;
                    }
                    if(BFA.rightHyperextensionY.checked == false && BFA.rightHyperextensionN.checked == false){
                        alert("Please select an option for Right Hyperextension of elbow beyond 10 degrees");
                        return false;
                    }
                    
                    if(BFA.ALL.value == ""){
                        alert("Abdominal Leg Lowering needs to be filled out");
                        return false;
                    }
                    if(BFA.leftAnklePlantar.value==""){
                        alert("Please fill out Left Ankle Plantar Flexion Reps");
                        return false;
                    }
                    if(BFA.rightAnklePlantar.value==""){
                        alert("Please fill out Right Ankle Plantar Flexion Reps");
                        return false;
                    }
                    
                    
                    combineName(healthDemo.firstName.value, healthDemo.lastName.value);
                    updateForm();
                    document.getElementById("BFA").style.display = "none";
                    document.getElementById("output").style.display = "block";
                    
                }
                
               
          
            function updateForm(){
                document.getElementById("restingBPText").innerHTML = BFA.restingBP.value;
                document.getElementById("restingHRText").innerHTML = BFA.restingHR.value;
                document.getElementById("postureResult").innerHTML = postureScore();
                document.getElementById("scoliosisResult").innerHTML = BFA.ribBump.value;
                document.getElementById("scoliosisOther").innerHTML = scoliosisScore();
                document.getElementById("legLengthResult").innerHTML = legLengthYN();
                document.getElementById("legLengthResultOther").innerHTML = legLengthScore();
                document.getElementById("kneeExtOutput").innerHTML = genuRecurvartumOutput();
                document.getElementById("pronationOutput").innerHTML = pronationYN();
                document.getElementById("halluxOutput").innerHTML = BFA.halluxValgus.value;
                document.getElementById("rangeOutput").innerHTML = BFA.squatRange.value;
                document.getElementById("squatKneeOutput").innerHTML = kneeAlignmentScore();
                document.getElementById("forwardBendOutput").innerHTML = flexibilityScore();
                document.getElementById("floorLeft").innerHTML = BFA.leftTurnout.value;
                document.getElementById("floorRight").innerHTML = BFA.rightTurnout.value;
                document.getElementById("floorTotal").innerHTML = Number(BFA.leftTurnout.value)+Number(BFA.rightTurnout.value);
                document.getElementById("turnoutProblem").innerHTML = turnoutProblem();
                document.getElementById("discsLeft").innerHTML = BFA.leftDiscs.value;
                document.getElementById("discsRight").innerHTML = BFA.rightDiscs.value;
                document.getElementById("discsTotal").innerHTML = Number(BFA.leftDiscs.value)+Number(BFA.rightDiscs.value);
                document.getElementById("discsProblem").innerHTML = discsProblem();
                document.getElementById("passeLeft").innerHTML = BFA.leftPasse.value;
                document.getElementById("passeRight").innerHTML = BFA.rightPasse.value;
                document.getElementById("passeProblem").innerHTML = passeProblem();
                document.getElementById("psoasOutput").innerHTML = (BFA.psoasLeft.value == "WNL" && BFA.psoasRight.value == "WNL") ? "WNL" : "Tight";
                document.getElementById("psoasLeftOutput").innerHTML = BFA.psoasLeftAngle.value;
                document.getElementById("psoasRightOutput").innerHTML  = BFA.psoasRightAngle.value;
                document.getElementById("rectusFemorisOutput").innerHTML = (BFA.rfLeft.value == "WNL" && BFA.rfRight.value == "WNL") ? "WNL" : "Tight";
                document.getElementById("rectusFemorisLeftOutput").innerHTML = BFA.rfLeftAngle.value;
                document.getElementById("rectusFemorisRightOutput").innerHTML = BFA.rfRightAngle.value;
                document.getElementById("itbOutput").innerHTML = (BFA.itbLeft.value == "WNL" && BFA.itbRight.value == "WNL") ? "WNL" : "Tight";
                document.getElementById("itbLeftOutput").innerHTML = BFA.itbLeftAngle.value;
                document.getElementById("itbRightOutput").innerHTML = BFA.itbRightAngle.value;
                document.getElementById("hamstringsLeftOutput").innerHTML = hamstringScore(BFA.SLRLeft.value);
                document.getElementById("hamstringsRightOutput").innerHTML = hamstringScore(BFA.SLRRight.value);
                document.getElementById("hamstringProblem").innerHTML = hamstringProblem();
                document.getElementById("kneeExtOutput").innerHTML; 
                document.getElementById("kneeExtLeftOutput").innerHTML = BFA.leftKneeExt.value;
                document.getElementById("kneeExtRightOutput").innerHTML = BFA.rightKneeExt.value;
                document.getElementById("irLeftOutput").innerHTML = BFA.proneIRLeft.value;
                document.getElementById("erLeftOutput").innerHTML = BFA.proneERLeft.value;
                document.getElementById("irRightOutput").innerHTML = BFA.proneIRRight.value;
                document.getElementById("erRightOutput").innerHTML = BFA.proneERRight.value;
                document.getElementById("irProblem").innerHTML = irProblem();
                document.getElementById("erProblem").innerHTML = erProblem();
                document.getElementById("irerProblem").innerHTML = irerProblem();
                document.getElementById("leftFlexionOutput").innerHTML = BFA.pfLeft.value;
                document.getElementById("rightFlexionOutput").innerHTML = BFA.pfRight.value;
                document.getElementById("toeDorsiflexionLeftOutput").innerHTML = (BFA.firstMtpDFLeft.value == "<90") ? "Lim" : "WNL";
                document.getElementById("toeDorsiflexionRightOutput").innerHTML = (BFA.firstMtpDFRight.value == "<90") ? "Lim" : "WNL";
                var beight = beightonScore(BFA.rightKneeExt.value);
                document.getElementById("beightonOutput").innerHTML = beight.Grade;
                document.getElementById("beightonOutputOther").innerHTML =  beight.Score;
                document.getElementById("kneeLiftLeftOutput").innerHTML = BFA.kneeLiftLeft.value;
                document.getElementById("kneeLiftRightOutput").innerHTML = BFA.kneeLiftRight.value;
                var allOutputVar = allInterpretation();
                document.getElementById("ALLOutput").innerHTML = allOutputVar.grade;
                document.getElementById("hipFlexionLeftOutput").innerHTML = leftHipFlex();
                document.getElementById("hipFlexionRightOutput").innerHTML = rightHipFlex();
                document.getElementById("externalRotationLeftOutput").innerHTML = leftHipExtRotate();
                document.getElementById("externalRotationRightOutput").innerHTML = rightHipExtRotate();
                document.getElementById("internalRotationLeftOutput").innerHTML = leftHipIntRotate();
                document.getElementById("internalRotationRightOutput").innerHTML = rightHipIntRotate();
                document.getElementById("abductionLeftOutput").innerHTML = leftHipAbd();
                document.getElementById("abductionRightOutput").innerHTML = rightHipAbd();
                document.getElementById("adductionLeftOutput").innerHTML = leftHipAdd();
                document.getElementById("adductionRightOutput").innerHTML = rightHipAdd();
                document.getElementById("kneeFlexionLeftOutput").innerHTML = leftKneeFlex();
                document.getElementById("kneeFlexionRightOutput").innerHTML = rightKneeFlex();
                document.getElementById("ankleFlexionLeftOutput").innerHTML = anklePlantarResult(BFA.leftAnklePlantar.value);
                document.getElementById("ankleFlexionRightOutput").innerHTML = anklePlantarResult(BFA.rightAnklePlantar.value);
                document.getElementById("maxHROutput").innerHTML = BFA.maxHR.value;
                document.getElementById("oneMinRecoveryOutput").innerHTML = BFA.recovery1Min.value;
                document.getElementById("fitnessCategoryOutput").innerHTML = fitnessCategory(globalAge, globalSex, BFA.recovery1Min.value);
                
                Object.values(BFA.children).map(item=>item.id!==""?idList2.push(item.id):console.log(""))
                console.log(idList2)
                idListFin =  idList1.concat(idList2)
                console.log(idListFin)
                
                
                for(var i=0;i<idListFin.length;i++){
                    console.log(idListFin[i])
                    let idName = idListFin[i]
                    Object.assign(jsonData, {[idListFin[i]] :document.getElementById(idListFin[i]).value})
                }
                console.log(jsonData)
                const formURL = 'https://4klzmm4w2e.execute-api.us-east-2.amazonaws.com/Prod/submitForm';

                var xhr = new XMLHttpRequest();
                xhr.open('OPTIONS', formURL, true);
                // xhr.setRequestHeader('x-api-key', '7JGBaaB8fA99g4YDF1CTe5PFiPdlh2HE3oD8sYR4');
      
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
                console.log(typeof jsonData);
                // Send the collected data as JSON
                
                xhr.send(JSON.stringify(jsonData));
            } 
                   
    

