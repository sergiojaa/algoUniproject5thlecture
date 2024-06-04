//პროექტი 10 - ქულების გამომთვლელი
//შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით.
//შეფასების სქემა შემდეგნაირია:
//A: 90-100 B: 80-89 C: 70-79 D: 60-69 F: 0-59
// პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).
// გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.
// ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.
//მაგალითად:shell> Enter the student's score: 78 > Student's Score: 78 > Grade: C
// const mark = Number(prompt('Enter the student\'s score'))
// let grade = ''
// if(mark >= 90 && mark <= 100){
//     grade = 'grade: A'
//     console.log(`student's score is ${mark}, ${grade}`,)
// }else if(mark >= 80 && mark <=89){
//     grade = 'grade: B'
//     console.log(`student's score is ${mark}, ${grade}`,)
// }else if(mark >= 70 && mark <=79){
//     grade = 'grade: C'
//     console.log(`student's score is ${mark}, ${grade}`,)
// }else if(mark >= 60 && mark <=69){
//     grade = 'grade: D'
//     console.log(`student's score is ${mark}, ${grade}`,)
// }else if(mark >= 0 && mark <=59){
//     grade = 'grade: F'
//     console.log(`student's score is ${mark}, ${grade}`,)
// }else{
//     console.log('enter the number between 0 and 100')
// }


    // პროექტი 11 - Simple Math - მარტივი მათემატიკა
    //თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში
    // მიღებული მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა,
    // რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.
    //მაგალითად:
    //shell
    // What is the first number? 10
    // What is the second number? 5
    // 10 + 5 = 15
    // 10 - 5 = 5
    // 10 * 5 = 50
    // 10 / 5 = 2
// let number1 = Number(prompt('what is the first number?'))
// let number2 = Number(prompt('what is the second number?'))
// console.log( `${number1} + ${number2} = `,number1 + number2, )
// console.log( `${number1} - ${number2} = `,number1 - number2, )
// console.log( `${number1} * ${number2} = `,number1 * number2, )
// console.log( `${number1} / ${number2} = `,number1 / number2, )

//პროექტი 12 - Einstein - აინშტაინი
//შეიძლება გსმენიათ, რომ E = mc2, სადაც E წარმოადგენს ენერგიას (იზომება ჯოულებში),
// M წარმოადგენს მასას (იზომება კილოგრამებში), ხოლო C - სინათლის სიჩქარეს (დაახლოებით 300000000 მეტრი წამში). 
//ეს ალბერტ აინშტაინის ფორმულაა, რაც არსებითად ნიშნავს, რომ მასა და ენერგია ეკვივალენტურია.
//შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს ამ მასის 
//ეკვივალენტურ რაოდენობას ჯოულში. ეს ორივე რიცხვი უნდა იყოს მთელი (integer).
//მაგალითად:
//shell
/// > M: 50
// > E: 4500000000000000000
//მომხმარებლებისგან მიღებული მნიშვნელობა იქნება სტრიქონის (string) ტიპის. მათემატიკურ გამოთვლებამდე ეს მნიშვნელობები რიცხვებად უნდა გადააქციოთ.
// შემომავალი (input) და გამომავალი (output) მონაცემები კონვერტაციებისა და სხვა კალკულაციებისგან განცალკევებით უნდა გქონდეთ.
// let masa = parseInt(prompt('enter the masa'))
// let E = masa * 300000000
// console.log(E)

//პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი
//ჩვეულებრივ, რესტორანში სადილის შემდეგ სერვისისთვის "ჩაის" ტოვებენ, როგორც წესი, შეერთებულ შტატებში ეს თანხა კვების 
//ღირებულების 15%-ს ან მეტს აღწევს. შექმენით პროგრამა, რომელიც მოითხოვს თანხისა და პროცენტის შეყვანას და გეტყვით, რამდენი
// დოლარი უნდა დატოვოთ "ჩაის" სახით.
//ასევე, პროგრამაში უნდა გქონდეთ ორი ფუნქცია: 
//ერთი input-ად მიიღებს სტრიქონს (დაფორმატებულს, როგორც $##.##), თავში შლის $ ნიშანს და აბრუნებს თანხას ათწილადის სახით. მაგალითად, 50.00 დოლარის შემთხვევაში მან უნდა დააბრუნოს 50.0
//მეორე ფუნქცია input-ად მიიღებს ასევე სტრიქონს (დაფორმატებულს, როგორც ##%), ბოლოში შლის % ნიშანს და აბრუნებს პროცენტს ათწილადის სახით. მაგალითად, თუ input 15%-ია, ფუქცია 0.15-ს დააბრუნებს.
//მაგალითად:
//shell
//> How much was the meal? $50.00
//> What percentage would you like to tip? 15%
//> Leave $7.50
    // let sold = Number(prompt('How much was the meal?'))
    // let percentage = Number(prompt('What percentage would you like to tip?'))
    // let leave = sold * percentage / 100
    // console.log( 'leave:' ,`${leave}`)


// პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი
//თქვენმა კომპიუტერმა იცის, რომელია მიმდინარე წელი, ამიტომ ეს ინფორმაცია თქვენს პროგრამებში შეგიძლიათ,
// ჩართოთ. უბრალოდ, უნდა გაარკვიოთ, როგორ შეუძლია თქვენს პროგრამირების ენას ამ მონაცემის თქვენთვის მოწოდება.
//შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, როცა გსურთ, პენსიაზე გახვიდეთ;
// შემდეგ კი განსაზღვრავს, რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.
//მაგალითად:
//shell
//What is your current age? 25
// At what age would you like to retire? 65
// You have 40 years left until you can retire.
// It's 2015, so you can retire in 2055.
// კიდევ ერთხელ, კალკულაციებამდე დარწმუნდით, რომ მონაცემები რიცხვით ტიპებში გქონდეთ
// თქვენს პროგრამაში მიმდინარე წელი ხელით არ ჩაწეროთ. ის თქვენი პროგრამირების ენის საშუალებით, სისტემური დროიდან უნდა მიიღოთ.
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let currentAge = Number(prompt('what is your current age?'))
// let retireAge = Number(prompt('At what age would you like to retire?'))
// const retireYear = currentYear + (retireAge - currentAge) 
// console.log(`it is: ${currentYear}, so you can retire in ${retireYear}`)

// პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი
//გლობალურ გარემოში მუშაობისას, თქვენ მოგიწევთ ინფორმაციის წარდგენა როგორც მეტრულ, ასევე იმპერიულ საზომ ერთეულებში.
//შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის სიგრძე და სიგანე ფუტებში. შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.

//მაგალითად:
//shell
//  > What is the length of the room in feet? 15
//  > What is the width of the room in feet? 20
//  > You entered dimensions of 15 feet by 20 feet.
//  > The area is
//  > 300 square feet
//  > 27.871 square meters
//  კონვერტაციის ფორმულაა: m2 = f2 × 0.09290304
// let length = Number(prompt('What is the length of the room in feet?'))
// let width = Number(prompt('What is the width of the room in feet?'))
// console.log(`you entered dimensions of ${length} feet by ${width} feet`)
// let square = length * width
// console.log(`the are is ${square} square meters`)
// let squareMeters = square * 0.09290304;
// console.log(`The area is ${squareMeters.toFixed(3)} square meters`);
//პროექტი 16 - Pizza Party - პიცის წვეულება
//გაყოფა ყოველთვის ზუსტი არ არის და ზოგჯერ ისეთი პროგრამები უნდა დავწეროთ, რომლებშიც 
//ათწილადების ნაცვლად ნაშთი მთელ რიცხვში უნდა გადავაქციოთ. დაწერეთ პროგრამა პიცების თანაბრად გასაყოფად.
// პროგრამამ input-ებად უნდა მოგთხოვოთ ხალხის რაოდენობა, პიცების რაოდენობა და თითო პიცაზე - ნაჭრების რაოდენობა.
// ნაჭრების რაოდენობა თანაბარი უნდა იყოს. აჩვენეთ პიცის ნაჭრების რაოდენობა, რომელიც თითოეულმა ადამიანმა უნდა შეჭამოს.
// თუ ნარჩენები რჩება, დაბეჭდეთ დარჩენილი ნაჭრების რაოდენობა.
//მაგალითად:
//shell
//> How many people? 8
//> How many pizzas do you have? 2
//> 8 people with 2 pizzas
//> Each person gets 2 pieces of pizza.
//> There are 0 leftover pieces.
// დარწმუნდით, რომ input-ები რიცხვით ტიპებში იყოს.
// დაამატეთ პროგრამას ფუნქციონალი, რომლითაც output-ში პროგრამა სწორად მართავს მხოლობით და მრავლობით რიცხვს, მაგალითად:
//shell
//> Each person gets 2 pieces of pizza.
//> Each person gets 1 piece of pizza.
// let people = 10
// let pizzas = 10
// let pizzaSlices = 5
// let eachSlices = pizzaSlices * pizzas
// console.log(`each person gets ${eachSlices / people} slices`)
