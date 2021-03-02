import ErrorIllustration from './images/illustration.svg';

function Error({ message }) {
  return (
    <div className="fixed top-0 left-0 w-screen flex items-center justify-center min-h-screen">
      <div className="mx-4 bg-red-50 rounded-2xl">
        <div className="mb-4">
          <img className="max-h-96" src={ErrorIllustration} alt="" />
        </div>
        <div className="text-center pb-4">
          <p className="font-mono text-xs text-red-900">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
