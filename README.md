# Quote Generator App

## Overview

This front-end project is a quote generator app that interacts with the [Quotable API](https://api.quotable.io) to display random quotes and allows users to bookmark their favourite quotes.

## Features

- Loads a random quote on the homepage using the `/random` endpoint.
- Button to generate another random quote.
- Displays a list of tags in a dropdown by calling the `/tags` endpoint.
- When a tag is selected, fetches a random quote using the selected tag from the `/random` endpoint.
- Allows users to bookmark quotes for later viewing.
- Global state management using Redux.
- Mobile-responsive design.
- Optionally includes loading indicators during API calls.
- Optionally includes the ability to remove quotes from the favourites section.
- Optionally persists bookmarked quotes using `localstorage`.

## Project Structure

```plaintext
/src
|-- components
|   |-- Navbar.tsx
|   |-- Quotes.tsx
|   |-- Tags.tsx
|-- pages
|   |-- Bookmark.tsx
|   |-- Home.tsx
|-- store
|   |-- slices
|   |   |-- bookmarkSlice.tsx
|   |   |-- quoteSlice.tsx
|   |   |-- tagSlice.tsx
|   |-- store.tsx
|-- App.tsx
|-- index.css
|-- main.tsx
|-- README.md
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd quote-generator
```

3. Install dependencies:

```bash
npm install
```
4. Run the app:

```bash
npm start
```

5. Open http://localhost:3000 in your browser.

## Usage

- On the homepage, a random quote is loaded automatically.
- Click the "Generate Quote" button to get another random quote.
- Use the dropdown to select a tag and get a quote based on that tag.
- Bookmark your favorite quotes by clicking the bookmark icon.
- View bookmarked quotes on the /bookmarks page.
- Optionally remove quotes from the bookmarks section.
- Optionally persist bookmarked quotes using localstorage.






