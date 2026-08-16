import { styles } from "../styles.ts"
import type { SortKey } from "../types.ts"

type Props = {
  draftQuery: string
  sort: SortKey
  onDraftQueryChange: (value: string) => void
  onSearch: () => void
  onSortChange: (value: SortKey) => void
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
]

export default function CourseToolbar({
  draftQuery,
  sort,
  onDraftQueryChange,
  onSearch,
  onSortChange,
}: Props) {
  return (
    <form
      className="skillpath-toolbar"
      style={styles.toolbar}
      onSubmit={(event) => {
        event.preventDefault()
        onSearch()
      }}
    >
      <div className="skillpath-search-group" style={styles.searchGroup}>
        <input
          className="skillpath-input"
          style={styles.searchInput}
          type="search"
          value={draftQuery}
          onChange={(event) => onDraftQueryChange(event.target.value)}
          placeholder="Search courses"
          aria-label="Search courses"
        />
        <button className="skillpath-search-btn" style={styles.searchButton} type="submit">
          Search
        </button>
      </div>
      <label className="skillpath-sort" style={styles.sortLabel}>
        <span style={styles.sortCaption}>Sort</span>
        <select
          className="skillpath-input"
          style={styles.sortSelect}
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortKey)}
          aria-label="Sort courses"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}
