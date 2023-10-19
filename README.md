# Countries Backend API

This is the backend API for the "Getting Countries" project. It provides a single endpoint for fetching a list of countries with pagination. Users can retrieve information about countries, including their flags and names.

## API Endpoint

- **Endpoint:** `/countries?page`
- **Method:** GET

### Request Parameters

- `page` (optional): The page number for pagination. If not provided, it defaults to page 1. If the requested page exceeds the allowed number of pages, it fetches the last page.

### Sample Request

```http
GET /countries?page=2

[
  {
    "flags": {
      "png": "https://flagcdn.com/w320/pf.png",
      "svg": "https://flagcdn.com/pf.svg",
      "alt": ""
    },
    "name": {
      "common": "French Polynesia",
      "official": "French Polynesia",
      "nativeName": {
        "fra": {
          "official": "Polynésie française",
          "common": "Polynésie française"
        }
      }
    }
  },
  {
    "flags": {
      "png": "https://flagcdn.com/w320/mf.png",
      "svg": "https://flagcdn.com/mf.svg",
      "alt": ""
    },
    "name": {
      "common": "Saint Martin",
      "official": "Saint Martin",
      "nativeName": {
        "fra": {
          "official": "Saint-Martin",
          "common": "Saint-Martin"
        }
      }
    }
  },
  // More country objects...
]
