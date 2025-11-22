import { useState } from 'react';
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Search from '../components/Search';

export default function Index({ posts, globalData }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterPosts(query, selectedTag);
  };

  const handleTagClick = (tag) => {
    const newTag = selectedTag === tag ? null : tag;
    setSelectedTag(newTag);
    filterPosts(searchQuery, newTag);
  };

  const filterPosts = (query, tag) => {
    let filtered = posts;

    if (query) {
      filtered = filtered.filter((post) => {
        const titleMatch = post.data.title
          .toLowerCase()
          .includes(query.toLowerCase());
        const descriptionMatch = post.data.description
          ?.toLowerCase()
          .includes(query.toLowerCase());
        return titleMatch || descriptionMatch;
      });
    }

    if (tag) {
      filtered = filtered.filter((post) =>
        post.data.tags?.includes(tag)
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <Layout>
      <SEO
        title="Home"
        description="Muhammad's personal blog featuring articles on web development, programming, and tech. Built with Next.js and the Antigravity theme."
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          <a
            href="https://muhammad.my"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Muhammad.my
          </a>
        </h1>
        <Search onSearch={handleSearch} />
        <ul className="w-full">
          {filteredPosts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-2xl md:last:rounded-b-2xl backdrop-blur-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 border-b-0 last:border-b hover:shadow-2xl hover:shadow-primary/20 group"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4"
              >
                {post.data.date && (
                  <p className="uppercase mb-3 font-bold opacity-60">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                {post.data.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.data.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTagClick(tag);
                        }}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${selectedTag === tag
                          ? 'bg-primary text-white'
                          : 'bg-white/10 hover:bg-white/20 text-gray-300'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
                <ArrowIcon className="mt-4 group-hover:text-primary transition-colors duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
