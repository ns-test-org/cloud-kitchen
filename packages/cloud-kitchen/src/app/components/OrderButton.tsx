interface OrderButtonProps {
  item?: string;
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export default function OrderButton({ item, size = 'medium', text }: OrderButtonProps) {
  const handleOrder = () => {
    // In a real app, this would integrate with a ordering system
    if (item) {
      alert(`Adding ${item} to cart! 🛒\n\nIn a real app, this would integrate with your ordering system.`);
    } else {
      alert('Opening order menu! 📱\n\nIn a real app, this would open your full menu and ordering system.');
    }
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const buttonText = text || (item ? `Add ${item}` : 'Order Now');

  return (
    <button
      onClick={handleOrder}
      className={`
        bg-primary hover:bg-primary-dark text-white rounded-full 
        transition-all duration-200 font-medium shadow-lg hover:shadow-xl
        transform hover:scale-105 active:scale-95
        ${sizeClasses[size]}
      `}
    >
      {buttonText}
    </button>
  );
}
