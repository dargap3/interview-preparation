# JS INTERVIEW PREPARATION

## BIG O

- Big O notation is the language we use for talking about how long an algorithm takes to run.

- Good code can be described in two points or the three pillars of programming:

  1. **Readability:** Can others understand your code?
  2. Scalability: Can your system handle growth?
     - **Speed:** Time complexity
     - **Memory:** Space complexity

- ### Big O's

  1. O(1) Constant Time: No loops. (Excellent)
  2. O(log N) Logarithmic: usually searching algorithms have log n if they are sorted (Binary search) (Good)
  3. O(n) Linear Time: loops through n items. (Fair)
  4. O(n log(n)) Log linear: usually sorting operations. (Bad)
  5. O(n^2) Quadratic time: every element in a collection needs to be compared to every other element. Two nested loops (Horrible)
  6. O(2^n) Exponential: recursive algorithms that solves a problem of size N. (Horrible)
  7. O(n!) Factorial time: you are adding a loop for every element. Oh no! (Horrible)

  Iterating through half a collection is still O(n).

  Two separate collections: O(a \* b)

- ### What Can Cause Time in a Function?

  - Operations (+,-, \*, /)
  - Comparisons (<, >, ===)
  - Looping
  - Outside Function call

- ### Rule Book

  1. We always care about what is the worst Case.
  2. Remove constants.
  3. Different inputs should have different variables:

  - O(a + b) --> For steps in the same order
  - O(a \* b) --> For nested steps

  4. Drop Non Dominants

## Interview Cheat Sheet

- The 3 pillars of good code:

  1. Readable
  2. Time Complexity
  3. Space Complexity

- What skills interviewer is looking for:

  - Analytic Skills: How can you think through problems and analyze things?

  - Coding Skills: Do you code well, by writing clean, simple, organized, readable code?

  - Technical knowledge: Do you know the fundamentals of the job you're applying for?

  - Communication skills: Does your personality match the companies’ culture?

- Step By Step through a problem:

  1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
  2. Make sure you double check: What are the inputs? What are the outputs?
  3. What is the most important value of the problem? Do you have time, and space and memory, etc. What is the main goal?
  4. Don't be annoying and ask too many questions.
  5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
  6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
  7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.
  8. Before you start coding, walk through your code and write down the steps you are going to follow.
  9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.
  10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function and you will at least have it there. Write something, and start with the easy part.)
  11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do… write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).
  12. Don’t use bad/confusing names like i and j. Write code that reads well.
  13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask the interviewer if we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?
  14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem.
  15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.

- Good code checklist:

  - It works
  - Good use of data structures
  - Code Re-use/ Do Not Repeat Yourself
  - Modular - makes code more readable, maintainable and testable
  - Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two
    separate loops are better than 2 nested loops
  - Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may
    exceed memory of machine
    Heurestics to ace the question:
  - Hash Maps are usually the answer to improve Time Complexity
  - If it's a sorted array, use Binary tree to achieve O(log N). Divide and Conquer - Divide a data set
    into smaller chunks and then repeating a process with a subset of data. Binary search is a great
    example of this
  - Try Sorting your input
  - Hash tables and precomputed information (i.e. sorted) are some of the best ways to optimize your
    code
  - Look at the Time vs Space tradeoff. Sometimes storing extra state in memory can help the time.
    (Runtime)
  - If the interviewer is giving you advice/tips/hints. Follow them
  - Space time tradeoffs: Hastables usually solve this a lot of the times. You use more space, but you can get a time optimization to the process. In programming, you often times can use up a little bit more space to get faster time

- And always remember: Communicate your thought process as much as possible. Don’t worry about finishing it fast. Every part of the interview matters.

## Data Structures

Data structure is a collection of values.

Algorithms are the steps or processes we put into place to manipulate these collection of values.

Data structures + algorithms = programs

Most common data structures are:

- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Tries
- Graphs
- Hash tables

Some Algorithms:

- Sorting
- Dynamic programming
- BFS + DFS (Searching)
- Recursion

Various operations that can be performed on different data structures:

- Insertion
- Deletion
- Traversal
- Searching
- Sorting
- Access

### 1. **Arrays:**

In JavaScript, an Array is a global object that is used to create a list-like object. Arrays represent collections of data, stored in contiguous memory locations and accessible by indices.

Sometimes called "lists", organizes items sequentially.

<u>**Static arrays**</u> are fixed in size while the <u>**Dynamic arrays**</u> allow us to copy and rebuild an array at a new location.

In interview questions, string should be treated as arrays.

Pros of using arrays: Fast lookups, fast push/pop, ordered.
Cons of using arrays: Slow inserts, slows deletes.

#### Exercises

- [Two Sum](https://leetcode.com/problems/two-sum/)
- [Maximun Subarray](https://leetcode.com/problems/maximum-subarray/description/)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)
- [Rotate Array](https://leetcode.com/problems/rotate-array/description/)
- [Longest Word](https://coderbyte.com/information/Longest%20Word)

### 2. **Hash Tables:**

In JavaScript, Hash Tables are often implemented as objects or Maps. A Hash Table is a structure that pairs keys to values allowing for fast retrieval of the value by using a key.

Hash tables, hash maps, maps, unordered maps, dictionaries, objects are ways to call them.

Pros of using hash tables: Fast lookups(\*), fast inserts, flexible keys.
Cons of using hash tables: unordered, slow key iteration.

(\*) We need a good collision resolution

### 3. **Linked Lists:**

JS doesn't actually come with link lists built in.

A pointer is a reference to another place in memory or another object or another node.

A linked list is a linear data structure that consists of a group of nodes in a sequence. Each node contains data and a reference (in JS, we use pointers implemented as object references) to the next node in the sequence. This structure allows for efficient insertion and deletion of elements without reorganizing the entire data structure.

There are two types of linked lists:

- Singly Linked List - Each node has one pointer to the next node.
- Doubly Linked List - Each node has two pointers, one to the next node and one to the previous node, making backward traversal possible alongside forward traversal.

Time and Space Complexity:

- Insertion O(1) for insertion at the beginning but O(n) if you need to scan through the list.
- Deletion is O(1) to remove from the start but O(n) from the end or middle because you need to traverse to find the node.
- Searching through the list is O(n) because you have to traverse through the list.
- Space Complexity is O(n) due to storage needs for n elements in the list.

When to use Linked Lists:
Use linked lists when you need constant-time O(1) insertions/deletions from the list (like when implementing queues).
Good choice when you do not know the memory size in advance or if you need to frequently add and delete nodes.
Not ideal for search-intensive tasks due to O(n) search time.

When to avoid:
Avoid linked lists when you need efficient, direct access to the individual elements (indexed access like arrays).
Not recommended if you need to perform lots of access by index operations or when memory space is a concern.

### 4. **Stacks and Queues:**

They are both what we call linear data structures.

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added to the stack will be the first one to be removed. Stacks can be implemented in JS using arrays or linked lists.

Basic Stack Operations:

- Push: Add an element to the top of the stack.
- Pop: Remove the top element of the stack.
- Peek: Get the top element of the stack without removing it.

When to use a Stack:

- Undo mechanisms in text editors.
- Function call management in programming languages (call stack).
- Syntax parsing in compilers.

A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The first element added will be the first one to be removed. Queues can be implemented in JS using linked lists or stacks.

Basic Queue Operations:

- Enqueue: Add an element to the end of the queue.
- Dequeue: Remove the element from the front of the queue.
- Front: Get the front item from the queue.

When to use a Queue:

- Managing tasks on a first-come, first-serve basis like CPU scheduling.
- Handling of live system queues like call center systems.

#### Exercises

- [Queue using stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/)

### 5. **Trees:**

A tree is a non-linear data structure consisting of nodes connected by edges where one node is designated as the root, and all other nodes are partitioned into disjoint sets which recursively form subtrees.

**Some Types of Trees and Their Use Cases:**

1. **Binary Search Trees (BST)**
   - A BST is where each node has up to two children with a left child having a value lesser than its parent and the right child having a value greater.
   - **Use Cases**: Useful for creating ordered lists, implementing dynamic sets, and databases where rapid search, insertion, and deletion are necessary.
   - **Time Complexity**:
     - **Search**: O(log n) on average, O(n) in the worst case (unbalanced tree).
     - **Insertion/Deletion**: O(log n) on average, O(n) in worst case.
   - **Space Complexity**: O(n) for storing n elements.
2. **Balanced vs Unbalanced Trees**
   - A balanced tree maintains height as low as possible by automatically adjusting the tree during operations to achieve the minimum possible maximum height, reducing the time complexity of operations.
   - An unbalanced tree does not regulate height, which can lead to decreased performance (similar to a linked list in the worst case).
3. **AVL Trees**

   - A type of self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.
   - **Use Cases**: Useful where frequent insertions and deletions are expected, and quick search is necessary.
   - **Time Complexity**:
     - **Search/Insertion/Deletion**: O(log n).
   - **Space Complexity**: O(n).

4. **Red-Black Trees**
   - Another type of self-balancing binary search tree, where each node stores an extra bit for denoting the color of the node, either red or black.
   - **Use Cases**: Commonly used in computational geometry and in building other data structures like persistent data structures.
   - **Time Complexity**:
     - **Search/Insertion/Deletion**: O(log n).
   - **Space Complexity**: O(n).
5. **Binary Heaps**
   - A binary heap is a complete binary tree which satisfies the heap ordering property: the value of each node is either greater than or equal to (max-heap) or less than or equal to (min-heap) the values of its children.
   - **Use Cases**: Implementing priority queues, scheduling problems, sorting algorithms.
   - **Time Complexity**:
     - **Insertion**: O(log n).
     - **Deletion**: O(log n).
   - **Space Complexity**: O(n).
6. **Priority Queues**
   - An abstract data type where each element has a "priority" assigned to it. In a priority queue, an element with high priority is served before an element with low priority.
   - Implemented using structures like heaps for efficient performance.
   - **Use Cases**: Bandwidth management, any scenario where resources are scheduled.
   - **Time Complexity**:
     - **Insertion**: O(log n) (using binary heaps).
     - **Deletion of the highest priority element**: O(log n).
   - **Space Complexity**: O(n).

**When to Use and When Not to Use Trees:**

- **Use when**:
  - You need ordered data.
  - You require quick search, insertion, and delete operations.
  - You deal with a system that requires priority-based scheduling (use binary heaps).
- **Avoid when**:
  - Operations requiring simple, sequential access to elements where arrays or linked lists can be simpler and more effective.
  - Real-time constraints where even the logarithmic time complexity may be undesirable.

### 6. **Graphs:**

**What is a Graph?**

A graph is a collection of nodes (vertices) and edges connecting some or all of those nodes. Graphs are used to model various real-world situations involving relationships between objects.

**Types of Graphs:**

1. **Directed vs. Undirected Graphs**

   - **Directed Graph (Digraph)**: Edges have a direction, meaning the relationship is one-way. For example, a Twitter following graph, where if person A follows person B, it doesn't necessarily mean B follows A.
   - **Undirected Graph**: Edges have no direction. The relationship is mutual/bidirectional, such as a Facebook friends graph where a friendship is mutual.

2. **Weighted vs. Unweighted Graphs**

   - **Weighted Graph**: Edges have weights associated with them, representing the cost or distance between nodes. Useful in scenarios such as routing and navigation systems.
   - **Unweighted Graph**: Edges do not carry weights. Simple representation of connectivity, suitable for relationship mapping where the strength or capacity of connection is irrelevant.

3. **Cyclic vs. Acyclic Graphs**
   - **Cyclic Graph**: Contains at least one cycle, potentially complicating traversal algorithms.
   - **Acyclic Graph**: Does not contain any cycles. A common example is a directed acyclic graph (DAG), used in scenarios like task scheduling and dependencies.

**When to Use Graphs:**

- **Use Cases**: Network routing, social network features, recommendation engines, project scheduling, biological data analysis.
- **Pros**: Excellent for representing complex relationships and interconnected data.
- **Cons**: Algorithms can become complex and computationally expensive, particularly for dense graphs.

**Time and Space Complexity**

- **Time Complexity**: Varies based on operation and the type of graph representation:

  - For adjacency list representation, finding all edges connected to a vertex is O(V), where V is vertices count; finding if there is an edge between two vertices can be O(V).
  - For adjacency matrix representation, checking if an edge exists between two vertices is O(1), but finding all edges connected to a vertex is O(V).

- **Space Complexity**:
  - Adjacency list: O(V + E), where E is edges count.
  - Adjacency matrix: O(V^2).

## Algorithms

### 1. Recursion:

Recursion isn't technically an algorithm, it's more of a concept.
A recursive function is a function that refers to itself.

There are 3 rules when we talk about resursion:

1. Identify the base case.
2. Indetify the recursive case.
3. Get closer and closer and return when needed. Usually you have 2 returns.

Recursion is useful for things such as tree data structures and doing traversal.

Recursion could be really space complexity expensive and we have to be careful whenever we use it.

### 2. Sorting:

#### 1. Bubble Sort:

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

- When to use: It's suitable for small datasets or when simplicity is more important than efficiency.
- When not to use: It's inefficient for large datasets as its average and worst-case complexity are both O(n^2).

#### 2. Selection Sort:

Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front of the list, and a sublist of the remaining unsorted items.

- When to use: It’s useful when memory writes are significantly more expensive than reads, such as with EEPROM or flash memory.
- When not to use: Generally not suitable for large datasets due to its O(n^2) complexity.

#### 3. Insertion sort:

Insertion sort works by building the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort.

- When to use: Useful for small datasets or nearly sorted arrays.
- When not to use: For larger or completely random datasets because of its O(n^2) complexity.

#### 4. Merge sort:

Merge sort is a divide-and-conquer algorithm that divides the unsorted list into n sublists, each containing one element, then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining.

- When to use: Suitable for large datasets because it has a consistent O(n log n) runtime.
- When not to use: It requires additional memory for the temporary arrays, so not great for memory-limited systems.

#### 5. Quick sort:

Quick sort is a highly efficient sorting algorithm and is based on partitioning of an array into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.

- When to use: It is generally considered the fastest on average for large datasets.
- When not to use: Worst-case performance is O(n^2), though this is rare. It also has a relatively deep recursion stack.

#### 6. Heap sort:

Heap sort involves building a Heap data structure from the elements of the array and then utilizing the properties of the heap to sort the array.

- When to use: Good for real-time systems where time predictability is crucial due to its consistent O(n log n) performance.
- When not to use: It can be slow in practice because of its overhead and memory usage.

#### 7. Radix sort:

Radix sort is a non-comparative sorting algorithm that sorts integers by processing individual digits. Numbers are processed from the least significant digit to the most significant digit.

- When to use: Useful for fixed length integer sorting.
- When not to use: Not suitable for sorting strings or floating-point numbers.

#### 8. Counting sort:

Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values, then doing some arithmetic to calculate the position of each object in the output sequence.

- When to use: Efficient when the range of potential items in the input is known and not too large.
- When not to use: It uses a lot of memory if the range of potential items is large.

#### Which sort is best?

The "best" sorting algorithm depends on the specific requirements of the task, including the size and type of data, and the performance characteristics required. Quick sort is generally a good default choice. For specific constraints or data types, other algorithms might be more appropriate.

### 3. Searching and traversal:

#### - Linear Search:

Linear search is a straightforward method of searching where the target value is checked sequentially from the start to the end of a list until it’s found or until all the elements have been checked.

- **Time complexity:** O(n)
- **When to use:** Useful when the list is unsorted, or when working with small to medium datasets where the simplicity of implementation is more valuable than efficiency.
- **When not to use:** Inefficient for large datasets as it can be time-consuming due to its linear nature.

#### - Binary Search:

Binary search is a much faster search algorithm than linear search. It works on the principle of divide and conquer and can be applied only on a sorted list. It repeatedly divides the list into two halves until the target value is found or until the halves cannot be divided anymore.

- **Time complexity:** O(log n)
- **When to use:** Efficient for searching in large, sorted datasets.
- **When not to use:** Not suitable for unsorted lists, and managing the sorting overhead can be undesirable if elements are frequently inserted or removed.

#### - Depth First Search (DFS):

Depth First Search is a graph traversal algorithm that starts at the root node and explores as far as possible along each branch before backtracking. It can be implemented using recursion or a stack.

- **Time complexity:** O(n)
- **When to use:** Useful when you need to explore all options and only the complete path matters since it can traverse through more graph in less time. Good for solving puzzles, finding connected components, or game simulations.
- **When not to use:** Can get slow if the depth is very high or if the graph has cycles and precautions aren’t taken. It might also exhaust more memory due to recursion or stack.

#### - Breadth First Search (BFS):

Breadth First Search is another graph traversal algorithm that starts at the root node and explores all neighbor nodes at the present depth prior to moving on to nodes at the next depth level. It uses a queue.

- **Time complexity:** O(n)
- **When to use:** Excellent for finding the shortest path and closer nodes in terms of the number of edges. Useful in scenarios such as GPS and network routing for finding the nearest location.
- **When not to use:** It uses additional memory, which can be a constraint for very large graphs or data sets.

In using these algorithms, it's crucial to consider the nature of the data structure (like trees or graphs) and the specific requirements and constraints of the problem to select the most appropriate algorithm. Both DFS and BFS can be adapted with slight modifications to tackle various problems in complex graph-related challenges.

#### - Exercise

- [Validate a binary search tree](https://leetcode.com/problems/validate-binary-search-tree/description/)

## USEFUL RESOURCES

- [replit](https://replit.com/) --> Your own automated app developer
- [glot](https://glot.io/) --> an open source pastebin with runnable snippets and API.
- [course repo](https://github.com/aneagoie/ztm-master-the-coding-interview-ds-algo)
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [ZTM Big O Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
- [Performance interface](https://developer.mozilla.org/en-US/docs/Web/API/Performance) --> When we use JS the browser has a method called 'perfomance' that could be useful.
- [Example google interview](https://www.youtube.com/watch?v=XKu_SEDAykw)
- [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
- [Registers and RAM](https://www.youtube.com/watch?v=fpnE6UAfbtU)
- [Computer Memory](https://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)
- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)
- [Comparison of programming languages](<https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array)>)
- [Linked lists visualization](https://visualgo.net/en/list?slide=1)
- [Arrays vs Linked lists](https://www.youtube.com/watch?v=DyG9S9nAlUM)
- [Binary trees visualization](https://visualgo.net/en/bst?slide=1)
- [AVL Tree visualization](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
- [The little AVL Tree that could ](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
- [Red/Black Tree visualization](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
- [Painting Nodes Black with red-black trees](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
- [Red black and AVL trees comparision](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
- [Binary heap visualization](https://visualgo.net/en/heap?slide=1)
- [Why are two different concepts both called heap](https://stackoverflow.com/questions/1699057/why-are-two-different-concepts-both-called-heap)
- [Priority Queues](https://stackoverflow.com/questions/1699057/why-are-two-different-concepts-both-called-heap)
- [Graphs visualization](https://visualgo.net/en/graphds?slide=1)
- [Tail call optimization](https://2ality.com/2015/06/tail-call-optimization.html)
- [Sorting algorithms](https://www.toptal.com/developers/sorting-algorithms)
- [AlgoRythmics](https://www.youtube.com/user/AlgoRythmics/videos)
- [Stability in sorting algorithms](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
- [Heap Sort](https://brilliant.org/wiki/heap-sort/)
- [Quick vs Heap Sort](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort)
- [Radix Sort](https://brilliant.org/wiki/radix-sort/)
- [Radix Sort Animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)
- [Counting Sort](https://brilliant.org/wiki/counting-sort/)
- [Counting Sort Animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)
- [DFS vs BFS](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
- [DFS & BFS visualization](https://visualgo.net/en/dfsbfs?slide=1)
- [Dijkstra + Bellman-Ford Algorithms](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e)
