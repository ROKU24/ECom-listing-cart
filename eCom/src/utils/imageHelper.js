export const parseImages = (images) => {
    if (!images || !images.length) return [];
    return images.map(img => {
      if (typeof img === 'string') {
        // Check if it's a JSON string
        if (img.startsWith('[')) {
          try {
            const parsed = JSON.parse(img);
            return Array.isArray(parsed) ? parsed[0] : parsed;
          } catch (e) {
            return img;
          }
        }
        return img;
      }
      return '';
    }).filter(Boolean);
   };