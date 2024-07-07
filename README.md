## How to start project

In order to start the project, you must first do npm install and then the "npm run dev" command, which will be used to start the project on the local host, and clicking on the link will take you to the browser and open the started project.

### Transfer the project to TypeScript Task 1

I have completed the transition from JavaScript to TypeScript with the following compiler options:

-   "noImplicitAny": true
-   "strict": true
-   "strictNullChecks": true
-   "noImplicitThis": true

### Create a List Component Task 2

For this task, I've created a custom hook with Axios named useFetchData that encapsulates the logic for fetching data from the API endpoint (https://jsonplaceholder.typicode.com/users). This hook manages the fetching of user data from the API. It handles loading states, errors, and stores the fetched users in state. Then i created two components List and ListItem for using that hook and rendering data.

### Create a Form Generator Component Task 3

-   **Validation Schema:** I used Formic for form and Yup for validation schema
-   **API Hook Call:** Custom hook useFetchData that i made i used for this task also.
-   **Callback Function for Form Rendering:** It implements the renderForm callback function prop that renders the form elements and manages their state appropriately. The renderForm function is passed as a prop to the FormGenerator component and used within the Formik component to render form fields (Field components for text input and textarea), and display error messages for each field. Additionally, the function takes formikProps and isFormSubmitted as arguments to manipulate the form state during submission.

2. Component Implementation:

-   The constraints include a minimum length of 2 characters and a maximum of 20 characters, with all fields being required.
-   During loading, a loader appears, and in case of errors, an error message is displayed. I made two components, one for displaying errors and one for loading indicators. Additionally, I implemented a POST method that sends data to an endpoint. If successful, a success message is shown; if there's an error, an error message is displayed.

### Create a Page Generator Component Task 4

Dynamic Layout Handling: The CreatePage component dynamically processes different layout types (sectionLayout) passed via props (pageLayout).

Scalability and Reusability: Designed for scalability, it efficiently accommodates future layout types by relying on the pageLayout prop, which defines each section's structure with components and specific props.

Prop Structure:

PageLayout is the main prop, an array of objects.
Each object represents a page section with its type (layout type), components array (list of components), and additional props specific to that layout.
Each component within components has a type defining its type and props specific to that component.

Implementation:

Within CreatePage, iterate over pageLayout to render each section (sectionLayout) using the appropriate Layout.
Iterate through the components of each section and render the corresponding component (Hero or TrustBar) based on its type, passing relevant props.
