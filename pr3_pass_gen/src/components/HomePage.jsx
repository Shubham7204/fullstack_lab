import PasswordGenerator from './PasswordGenerator';

const HomePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome to the Password Generator App</h2>
      <PasswordGenerator />
    </div>
  );
}

export default HomePage;
