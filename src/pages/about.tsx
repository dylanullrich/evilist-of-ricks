import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className='pb-6 px-3'>
      <h2 className='font-bold text-xl sm:text-5xl text-center p-3 sm:p-6'>
        About
      </h2>
      <div className='mx-auto py-6  from-gray-400 to-gray-500 bg-gradient-to-b rounded-lg max-w-xl'>
        <div className='px-6'>
          <ul className='list-disc pl-12 text-gray-800 font-medium'>
            <li className='font-extrabold'>
              We are here to determine the Most Evil Rick of them all.
            </li>
            <li>
              Rick is a character from the TV Show
              <Link
                href={'https://www.adultswim.com/videos/rick-and-morty'}
                passHref
              >
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;Rick and Morty
                </a>
              </Link>
              .
            </li>
            <li>
              Data sourced from the
              <Link href={'https://rickandmortyapi.com/'} passHref>
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;Rick and Morty API
                </a>
              </Link>
              .
            </li>
            <li>
              Results are sorted by number of votes, and percentage of
              &rdquo;evil&rdquo; votes.
            </li>
            <li>
              You will see the highest percentages first, if the percentages are
              equal, the Rick with more votes will rank higher.
            </li>
            <li>
              All results are received from Internet visitors, and do not
              reflect the opinion of the author of the app.
            </li>
            <li>
              Data will become more accurate as more results are collected.
            </li>
            <li>
              View the repository
              <Link
                href={'https://github.com/dylanullrich/evilist-of-ricks/'}
                passHref
              >
                <a className='text-violet-600 font-bold text-lgs'>&nbsp;here</a>
              </Link>
              .
            </li>
            <li>
              Inspired by Theo&#39;s
              <Link href={'https://roundest.t3.gg/'} passHref>
                <a className='text-violet-600 font-bold text-lgs'>
                  &nbsp;roundest-mon
                </a>
              </Link>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
