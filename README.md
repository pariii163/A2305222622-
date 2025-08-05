# [Your Roll Number] - Frontend Test Submission

## Project Status
This submission represents the current state of the project at the end of the time limit.

## Architecture Design
The application is a single-page application (SPA) built with React and TypeScript.

### Technology Stack
- **Framework**: React
- **Language**: TypeScript (preferred)
- **Styling**: Material UI
- **Routing**: React Router DOM

### Data Flow & State Management
- The application uses client-side state to manage shortened URLs. The main `App.tsx` component holds the central state, which is passed down to other pages as props.
- This approach was chosen for simplicity and because a backend was not provided.

### Component Structure
- `App.tsx`: Main component, handles routing and global state.
- `pages/UrlShortenerPage.tsx`: Contains the form for shortening URLs.
- `pages/UrlStatisticsPage.tsx`: (Planned) Will display the table of shortened URLs.
- `components/Navbar.tsx`: Provides site navigation.
