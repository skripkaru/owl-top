import { useEffect, useState, JSX, KeyboardEvent } from 'react'
import { RatingProps } from './Rating.props'
import styles from './Rating.module.scss'
import cn from 'classnames'
import Star from './star.svg'

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, i: number) => {
      return (
        <Star
          className={cn(styles.star, {
            [styles.fill]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(i + 1)}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
          tabIndex={isEditable ? 0 : -1}
        />
      )
    })

    setRatingArr(updatedArr)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) return

    constructRating(i)
  }

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) return

    setRating(i)
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return

    setRating(i)
  }

  return (
    <div className={cn(styles.rating, className)} {...props}>
      {ratingArr.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}

export default Rating
