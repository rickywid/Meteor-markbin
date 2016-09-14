import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  
  Meteor.publish('bins', function(){
  	return Bins.find({ ownerID: this.userId });
  });

  Meteor.publish('sharedBins', function(){

	// find logged in user's user object based on their ID
  	const user = Meteor.users.findOne(this.userId);
	// if there is no logged in user, return nothing
  	if(!user){ return; }

  	// if user found, get their email address (assuming they have only one email address)
  	const email = user.emails[0].address;
  	return Bins.find({sharedWith: {$elemMatch: { $eq: email }}});
  })
});
