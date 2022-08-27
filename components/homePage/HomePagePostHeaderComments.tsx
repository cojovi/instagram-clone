import Link from 'next/link';

function HomePagePostHeaderComments({ postDetails }: { postDetails: any }) {
  return (
    <div>
      {postDetails.comments[0]?.text === '' ? (
        <div className="pt-2 text-sm">
          <p>
            <b>
              <Link href={postDetails.comments[1]?.username}>
                {postDetails.comments[1]?.username}
              </Link>
            </b>{' '}
            {postDetails.comments[1]?.text}
          </p>
          <p className="pt-2">
            <b>
              <Link href={postDetails.comments[2]?.username}>
                {postDetails.comments[2]?.username}
              </Link>
            </b>{' '}
            {postDetails.comments[2]?.text}
          </p>
        </div>
      ) : (
        <div className="pt-2 text-sm">
          <p>
            <b>
              <Link href={postDetails.comments[0]?.username}>
                {postDetails.comments[0]?.username}
              </Link>
            </b>{' '}
            {postDetails.comments[0]?.text}
          </p>
          <p className="pt-2">
            <b>
              <Link href={postDetails.comments[1]?.username}>
                {postDetails.comments[1]?.username}
              </Link>
            </b>{' '}
            {postDetails.comments[1]?.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePagePostHeaderComments;
