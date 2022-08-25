// syntactic sugar

class Instructor{
   name;
   designation = 'web course instructor'
   team = 'web team'
   location;

   constructor(name, location){
      this.name = name;
      // this.designation = designation;
      // this.team = team;
      this.location = location;
   }

   startSupportSession(time){
      console.log(`start the support session at ${time}`);
   };

   createQuiz(module){
      console.log(`please create the wuiz for module ${module}`);
   };
};

const aamir = new Instructor('amir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('09:00')
aamir.createQuiz('34');

const solaiman = new Instructor('solaiman', 'Dhaka');
console.log(solaiman);