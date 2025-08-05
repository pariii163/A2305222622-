# [A2305222622] - Frontend Test Submission

## Project Status
This submission represents the current state of the project at the end of the time limit. The core UI for the URL Shortener page has been completed with client-side validation. The next steps were planned to implement the core logic for URL shortening, state management, and the statistics page.

## Architecture Design
The application is a single-page application (SPA) built with React and TypeScript. The architecture is designed for a clean, modular, and maintainable codebase.

### Technology Stack
* **Framework**: React (or Next.js)
* **Language**: TypeScript (preferred)
* **Styling**: Material UI
* **Routing**: React Router DOM

### Data Flow & State Management
-   The application uses client-side state to manage shortened URLs. The main `App.tsx` component was planned to hold a central state to share data between different pages, such as the `UrlShortenerPage` and the `UrlStatisticsPage`.
-   This approach was chosen as a robust method for a client-side application, as a backend API was not part of the scope.

### Key Features Implemented
-   A user-friendly navigation bar using Material UI.
-   Client-side routing to switch between the URL Shortener and URL Statistics pages.
-   A functional form on the URL Shortener page with inputs for the original URL, validity period, and custom shortcode.
-   Basic client-side validation for the URL input to ensure a valid format.

### Component Structure
-   `App.tsx`: The root component that handles application routing and global state management.
-   `pages/UrlShortenerPage.tsx`: The page component containing the form for shortening URLs.
-   `pages/UrlStatisticsPage.tsx`: (Planned) The page component to display a list of all shortened URLs in a table format.
-   `components/Navbar.tsx`: A reusable component for site navigation.

