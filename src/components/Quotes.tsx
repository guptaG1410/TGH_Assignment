import React from 'react';
import { useEffect } from 'react';
import { LuBookMarked } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/slices/bookmarkSlice.js';
import { fetchQuotes, Status } from '../store/slices/quoteSlice.js';
import { AppDispatch } from '../store/store';

export interface quotesData {
  _id: string;
  content: string;
  author: string;
}

const Quotes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: quotes, status } = useSelector((state: any) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes(''));
  }, []);

  const handleAdd = (quotes: quotesData) => {
    dispatch(add(quotes));
  };

  if (status === Status.LOADING) {
    return <div className="lds-hourglass flex justify-center items-center" />;
  }

  if (status === Status.ERROR || !quotes.content) {
    return <h2 className="text-3xl text-white">{quotes.statusMessage}</h2>;
  }

  return (
    <>
      <section className="bg-gray-900 md:mt-10 mt-5 py-7 mx-auto relative rounded-xl md:w-[750px] w-[350px] min-h-[300px] h-auto text-white">
        <div className="flex items-center justify-center flex-col px-7">
          <h1 className="md:text-[1.9rem] text-[1.5rem] text-left min-h-[120px] h-auto">
            {quotes.content}
          </h1>
          <div className="w-full flex mt-20 justify-around items-center">
            <div></div>
            <p className="text-[22px] font-[700] leading-[38px] tracking-[1px]">
              -{quotes.author}
            </p>
            <LuBookMarked
              onClick={() => handleAdd(quotes)}
              className="text-2xl cursor-pointer active:animate-ping"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
