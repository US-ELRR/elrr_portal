export default function LearnerBanner({ user }) {
  return (
    <div className='bg-gray-300 w-full py-2 text-center'>
      <h1 className='text-3xl font-semibold'>
        Welcome {user?.learner.personnel.person.firstName} to the Enterprise
        Learner Record Repository&nbsp;
        <strong>(ELRR)</strong>
      </h1>
    </div>
  );
}
