"use client"

import {reviews} from "../shared/reviews"
import {useState, useEffect} from "react"
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

const ReviewSlider = () => {

    const [reviewList, setReviewList] = useState(reviews)
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevReview = () => {
        const isFirstReview = currentIndex === 0
        const newIndex = isFirstReview ? reviews.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextReview = () => {
        const isLastReview = currentIndex === reviews.length - 1
        const newIndex = isLastReview ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const lastIndex = reviewList.length - 1
        if(currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if(currentIndex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentIndex, reviewList])

    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentIndex(currentIndex + 1)
        }, 8000)
        return () => {
            clearInterval(slider)
        }
    }, [currentIndex])

    return (
        <div className="flex h-72 sm:h-64 items-center relative group">
            {reviewList.filter(item=>Number(item.id) === currentIndex + 1).map((item, index) => 
                <div key={item.id} className="flex flex-col text-center items-center basis-full md:mx-44 mx-8 translate-y-8 transition duration-1000">
                    <p className="md:text-sm text-xs">{item.description}</p>
                    <div className="flex items-center space-x-8 mb-6">
                        <img src="five-stars.svg" className="w-24" />
                        <h3 className="italic">- {item.name}</h3>
                    </div>
                </div>)}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 sm:left-24 text-2xl rounded-full p-2 bg-indigo-200 text-white cursor-pointer hover:bg-indigo-100 z-1">
                <BiChevronLeft onClick={prevReview} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 sm:right-24 text-2xl rounded-full p-2 bg-indigo-200 text-white cursor-pointer hover:bg-indigo-100 z-1">
                <BiChevronRight onClick={nextReview} size={30} />
            </div>
        </div>
    )

}

export default ReviewSlider

