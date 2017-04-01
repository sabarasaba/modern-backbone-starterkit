import HomePage from './HomePage'

it('renders without crashing', () => {
  const homePage = new HomePage().render()
  expect(homePage.$el.html()).toBeTruthy()
})

