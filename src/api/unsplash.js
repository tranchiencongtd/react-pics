import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID VBhr8LNfwj-GsKN0chnnyhpUZBvLYC1g73TnhAIwIlw`,
  },
});
