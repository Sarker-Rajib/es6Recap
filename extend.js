// common things are 
class TeamMember {
   name;
   location;
   constructor(name, location) {
      this.name = name;
      this.location = location;
   }

   providerFeedback() {
      console.log(`${this.name} thanks for your feedback`);
   };
}

// ==============
class Instructor extends TeamMember {
   designation = 'web course instructor'
   team = 'web team'

   constructor(name, location) {
      super(name, location);
   }

   startSupportSession(time) {
      console.log(`start the support session at ${time}`);
   };

   createQuiz(module) {
      console.log(`please create the wuiz for module ${module}`);
   };
};

// =============
class Developer extends TeamMember {
   designation = 'web course instructor'
   team = 'web team'
   tech;

   constructor(name, location, tech) {
      super(name, location);
      this.tech = tech;
   }

   develpoFeature(feature) {
      console.log(`start the ${feature}`);
   };

   release(version) {
      console.log(`please release the version ${version}`);
   };
};



const asila = new Instructor('asila', 'Naogan');
const alia = new Developer('alia', 'dhaka', 'react');
console.log(asila);
console.log(alia);