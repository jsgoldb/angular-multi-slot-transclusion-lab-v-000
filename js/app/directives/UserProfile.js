function UserProfile() {
	return {
		transclude: {
			name : 'h4',
			position : 'h6',
			description : 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<h4>Name</h4>',
				'<span ng-transclude="name"></span>',
				'<h4>Position</h4>',
				'<span ng-transclude="position"></span>',
				'<h4>Description</h4>',
				'<span ng-transclude="description"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);