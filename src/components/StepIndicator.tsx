
interface StepIndicatorProps {
  number: string;
  title: string;
  isActive?: boolean;
}

const StepIndicator = ({ number, title, isActive = false }: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`step-number ${
          isActive ? 'bg-ecorun-green' : 'bg-gray-300'
        }`}
      >
        {number}
      </div>
      <h3 className="mt-3 font-bold text-center text-ecorun-gray">{title}</h3>
    </div>
  );
};

export default StepIndicator;
