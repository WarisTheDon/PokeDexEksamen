import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'x745rs47', // erstatt med ditt faktiske prosjekt-ID fra sanity.json
  dataset: 'production',
  useCdn: true,
});
