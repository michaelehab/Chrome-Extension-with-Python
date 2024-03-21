import requests

def fetch_data(url):
    """Fetch and return JSON data from the given URL."""
    try:
        response = requests.get(url)
        response.raise_for_status()  # Will raise an HTTPError if the HTTP request returned an unsuccessful status code
        return response.json()
    except requests.exceptions.RequestException as e:
        return f"Error: {e}"