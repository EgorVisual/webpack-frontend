//TODO: fakeAuthProvider - тестовое название, нужно будет поменять
const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback) {
    //TODO: здесь можно сделать log in пользователей
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signOut(callback) {
    ъ//TODO: здесь можно сделать log out пользователей
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
export default fakeAuthProvider;