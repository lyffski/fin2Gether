import { Entry } from 'contentful';
import client from '../../contentful.js';


interface Translation {
  key: string;
  value: string;
}



export async function fetchTranslations(locale: string): Promise<any[]> {
  try {
    const response: { items: Entry<any>[] } = await client.getEntries({
      content_type: 'translation', // Adjust this based on your content model
      locale,
    });

    const translations = response.items.reduce((acc: any[], item: Entry<any>) => {
      const { key, value } = item.fields;
      return [...acc, { key, value }];
    }, []);

    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return [];
  }
}
