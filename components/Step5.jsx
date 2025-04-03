import { useForm } from "react-hook-form";

const Step5 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fitnessGoal: formData.fitnessGoal || "",
      obstacles: formData.obstacles || "",
      futureGoal: formData.futureGoal || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      fitnessGoal: data.fitnessGoal,
      obstacles: data.obstacles,
      futureGoal: data.futureGoal,
    });
    // console.log("Step 5 Form Data:", data); // Log all input values
    handleSubmit(); // Proceed to Step 6
  };

  return (
    <form onSubmit={formSubmit(onSubmit)} className="space-y-6 text-white">
      {/* Fitness Goal Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          What best describes your main fitness goal right now? *
        </label>
        <div className="space-y-2">
          {["Build muscle", "Lose fat", "Body recomposition (lose fat and build muscle)", "Performance", "Health"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                {...register("fitnessGoal", {
                  required: "Please select a fitness goal",
                })}
                className="mr-2 h-5 w-5 text-orange-500 focus:ring-orange-500"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errors.fitnessGoal && (
          <p className="text-red-500 text-sm mt-1">{errors.fitnessGoal.message}</p>
        )}
      </div>

      {/* Obstacles Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          What do you think are the primary (up to 3) obstacles that are in the way of your fitness goals? *
        </label>
        <textarea
          {...register("obstacles", {
            required: "Please describe your obstacles",
          })}
          className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
        />
        {errors.obstacles && (
          <p className="text-red-500 text-sm mt-1">{errors.obstacles.message}</p>
        )}
      </div>

      {/* Future Goal Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Where would you like to be w.r.t. your fitness a year from now? *
        </label>
        <textarea
          {...register("futureGoal", {
            required: "Please describe your future goal",
          })}
          className="mt-1 block w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
        />
        {errors.futureGoal && (
          <p className="text-red-500 text-sm mt-1">{errors.futureGoal.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-[#EF4123] text-white px-6 py-3 rounded-md hover:bg-[#FF6B4A] transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step5;