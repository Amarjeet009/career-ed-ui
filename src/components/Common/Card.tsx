'use client';

const Card = ({
  imageUrl = '/default.jpg',
  title = 'Card Title',
  description = 'This is a short description for the card component.',
  buttonText = 'Learn More',
  onButtonClick = () => {},
}) => {
  return (
    <div className="relative f-full z-10 overflow-hidden bg-white dark:bg-gray-dark rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-55 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;