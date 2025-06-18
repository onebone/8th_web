import {useForm} from "react-hook-form"
import {memo} from "react";

type Language = 'ko' | 'en' | 'ja'

interface SearchProps {
    title: string
    adult: boolean
    language: Language
}

export const Search = memo(function Search({
    onSubmit
}: {
    onSubmit: (value: string) => void
}) {
    const { register, handleSubmit } = useForm<SearchProps>({
        defaultValues: {
            title: '',
            adult: false,
            language: 'ko'
        }
    })

    const onSubmitHandler = (props: SearchProps) => {
        console.log(props)
        onSubmit(props.title)
    }

    return <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="grid grid-cols-2 rounded-xl border-b-2 shadow-xl p-8 gap-4">
            <div className="flex flex-col w-full items-center">
                <span>영화 제목</span>
                <input
                    {...register('title')}
                    type="text"
                    className="border-2 w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="flex flex-col w-full items-center">
                <span>옵션</span>
                <div className="flex w-full border-2 border-gray-300 rounded-md p-2 gap-4">
                    <input
                        {...register('adult')}
                        type="checkbox"
                        className="border-2 border-gray-300 rounded-md p-2" />

                    <span className="flex-1">성인 콘텐츠 표시</span>
                </div>
            </div>

            <div className="flex flex-col w-full items-center col-span-2">
                <span>언어</span>
                <select
                    {...register('language')}
                    className="border-2 w-full border-gray-300 rounded-md p-2">
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-400 text-white rounded-md p-2 col-span-2 mt-4"
            >검색하기</button>
        </div>
    </form>
})
