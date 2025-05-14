export const getAssetUrl = (filename: string) => {
    // Base URL for your app's assets on Zalo's CDN
    const BASE_URL = 'https://h5.zadn.vn/zapps/1584660014498330671/assets/';

    // Clean up the file path by removing any leading slashes
    const cleanPath = filename.replace(/^\/+/, '');

    // Return the full URL
    return `${BASE_URL}${cleanPath}`;
}