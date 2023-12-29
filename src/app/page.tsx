const getHero = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/blo', {
      cache: 'no-store',
    });
    return response.json();
  } catch (error) {
    console.log('error', error);
    throw error; // Re-throw the error to propagate it
  }
};

export default async function Appp() {
  try {
    const { hero } = await getHero();
    return (
      <div>
        {/* Render the hero data */}
        {hero && (
          <div>
            <p>Name: {hero.heroTitle}</p>
            <p>Power: {hero.heroContent}</p>
            {/* ... other properties */}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in Appp:', error);
    return (
      <div>
        {/* Render an error message */}
        <p>Error fetching hero data.</p>
      </div>
    );
  }
}
