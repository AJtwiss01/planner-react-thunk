const initState = {
  projects: [
      {id:1, title: 'first titile ', content:  "dolor sit amet consectetur adipisicing elit. Fugiat laudantium eius, provident facilis eum pariatur aspernatur voluptatem quam doloremque eligendi aliquam fuga eveniet iste nihil illo vero. Vel, fugiat quod"},
      {id:2, title: 'Second titile ', content:  "dolor sit amet consectetur adipisicing elit. Fugiat laudantium eius, provident facilis eum pariatur aspernatur voluptatem quam doloremque eligendi aliquam fuga eveniet iste nihil illo vero. Vel, fugiat quod"},
      {id:3, title: 'Third titile ', content:  "dolor sit amet consectetur adipisicing elit. Fugiat laudantium eius, provident facilis eum pariatur aspernatur voluptatem quam doloremque eligendi aliquam fuga eveniet iste nihil illo vero. Vel, fugiat quod"}
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};
export default projectReducer