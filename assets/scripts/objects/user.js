const user = {
  avatarUrl: "",
  name: ",",
  bio: "",
  userName: "",
  followers: "",
  following: "",
  repositories: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.loging;
    this.followers = gitHubUser.followers;
    this.following = gitHubUser.following;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },
  setEvents(events){
    this.events = events
  }
};
// avatar_url
// bio
// name
// followers
// following
export { user };
