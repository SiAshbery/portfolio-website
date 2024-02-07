import { ToWords } from 'to-words';

const yearsHence = (yearToCompare: number): string => {
    return new ToWords().convert(new Date().getFullYear() - yearToCompare).toLowerCase();
};

export default yearsHence;
