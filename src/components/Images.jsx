import amster from '../assets/img2.jpg';
function Images() {
  return (
    <div>
      <img
        src='/img1.jpg'
        alt='amsterdam'
      />
      <img
        src={amster}
        alt=''
      />
    </div>
  );
}

export default Images;
