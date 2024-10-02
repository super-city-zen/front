import { useEffect } from "react";
import Card from "../components/home-page/Card"
import { useDispatch, useSelector } from "react-redux";
import { addVote, selectVotes } from "../store/voteSlice";
import { addCategories, selectCategories } from "../store/categorieSlice";
import { addNews, selectNews } from "../store/actualitySlice";
const HomePage = () => {
    const votes = useSelector((state) => selectVotes(state));
    const categories = useSelector((state) => selectCategories(state));
    const news = useSelector((state)=> selectNews(state));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addVote());
        dispatch(addCategories());
        dispatch(addNews());
    }, []);

    return (
        <>
            <div className={'m-auto flex justify-center'}>
            <Card textColor={'text-dark-blue'} borderColor={'border-dark-blue'} background={'bg-dark-blue'} height={'h-auto '} width={'w-[45rem] '} title={'Categories'} items={categories} />
                <div className="mx-4">
                    <Card className="my-2" borderColor={'border-purple'} textColor={'text-purple'} background={'bg-purple'} height={'h-[20rem] '} width={'w-[30rem] '} title={'Vote en cours'} items={votes} />
                    <Card className="my-2" borderColor={'border-purple'} textColor={'text-purple'} background={'bg-purple'} height={'h-[20rem] '} width={'w-[30rem] '} title={'Actualitées'} items={news}/>
                </div>
            </div>
        </>
    )
}

export default HomePage;