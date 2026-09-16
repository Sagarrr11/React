# React User Card Manager

A simple React application for creating and managing user profile cards. Users can enter their name, role, profile image URL, and description. The created users are displayed as cards and persisted in the browser using `localStorage`.

## Features

- Create new user cards
- Controlled form inputs using React `useState`
- Display users dynamically using `.map()`
- Pass data from `App` to the `Card` component using props
- Delete users from the list
- Confirmation before deleting a user
- Persist user data using `localStorage`
- Automatically clear the form after creating a user
- Responsive layout using Tailwind CSS

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Vite
- Browser Local Storage

## Concepts Practiced

### 1. React `useState`

Multiple pieces of state are used to manage form inputs and the users list.

```js
const [userName, setUserName] = useState('')
const [userRole, setUserRole] = useState('')
const [imageURL, setImageURL] = useState('')
const [userDesc, setUserDesc] = useState('')
