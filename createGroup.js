function createGroup(params, context, done) {
	var accessToken = params.userToken;
	//var existingEmail = existingUserEmail;
	console.log("the access token of created user is" + accessToken);
	KiiUser.authenticateWithToken(accessToken).then(
			function(theUser) {
				var groupOwner = theUser.getID();
				var groupName = "summary";
				var group = KiiGroup.groupWithName(groupName);
				group.save().then(
						
								function(savedGroup) {
									// Get the reference URI.
									var groupUri = savedGroup.objectURI();
									// Get the reference ID.
									var groupID = savedGroup.getID();
									console.log();
									var groupName = savedGroup.getName();
									//addGroupMembers(groupUri, context, done,
											//existingEmail, accessToken,
											//groupOwner);
									// changeGroupName(savedGroup, context,
									// done)
									// groupMembersList(savedGroup, context,
									// done)
									// retrieveById(groupID, context, done);
									// retrieveByUri(groupUri, context, done);
									// retrieve(groupUri, context, done);
									 done("created group successfully");
								},
								function(theGroup, errorString) {
									console.log("Error creating group: "
											+ errorString);
									done("group creation failed");
								});

			}, 
			function(theUser, errorString) {

				console.log("failed authenticated");
				done("failed authenticated");
			});
}
