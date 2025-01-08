// bugSolution.js
export async function getStaticProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to fetch data',
        data: null, // Or a default data set
      },
    };
  }
}

export default function Page({ data, error }) {
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {/* Render your data here */}
      {JSON.stringify(data)}
    </div>
  );
}