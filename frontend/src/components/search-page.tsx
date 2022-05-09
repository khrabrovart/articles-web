import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Page } from './page';

interface SearchForm {
  searchText: string;
  more: string;
}

export const SearchPage = () => {
  const { register, handleSubmit } = useForm<SearchForm>();
  const [searchParams] = useSearchParams();
  const defaultSearchText = searchParams.get('searchText') ?? '';

  return (
    <Page>
      <p>This is a Search page</p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register('searchText')}
          type="text"
          placeholder="Search..."
          defaultValue={defaultSearchText}
        />
        <input {...register('more')} type="text" placeholder="Comments..." />
        <input type="submit" />
      </form>
    </Page>
  );
};
