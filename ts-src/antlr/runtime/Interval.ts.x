/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
/** An immutable inclusive interconst a..b  */
class Interval {
    constructor(a: number, b: number) {}

    /** return number of elements between a and b inclusively. x..x is length 1.
     * if b &lt; a, then length is 0.  9..10 has length 2.
     */
    length(): number {
        return b < a ? 0 : b - a + 1
    }

    equals(o?: any): Boolean {
        if (o == null || !(o instanceof Interval)) {
            return false
        }
        const other = o as Interval?
        return this.a == other!!.a && this.b == other.b
    }

    hashCode(): number {
        hash = 23
        hash = hash * 31 + a
        hash = hash * 31 + b
        return hash
    }

    /** Does this start completely before other? Disjoint  */
    startsBeforeDisjoint(other: Interval): Boolean {
        return this.a < other.a && this.b < other.a
    }

    /** Does this start at or before other? Nondisjoint  */
    startsBeforeNonDisjoint(other: Interval): Boolean {
        return this.a <= other.a && this.b >= other.a
    }

    /** Does this.a start after other.b? May or may not be disjoint  */
    startsAfter(other: Interval): Boolean {
        return this.a > other.a
    }

    /** Does this start completely after other? Disjoint  */
    startsAfterDisjoint(other: Interval): Boolean {
        return this.a > other.b
    }

    /** Does this start after other? NonDisjoint  */
    startsAfterNonDisjoint(other: Interval): Boolean {
        return this.a > other.a && this.a <= other.b // this.b>=other.b implied
    }

    /** Are both ranges disjoint? I.e., no overlap?  */
    disjoint(other: Interval): Boolean {
        return startsBeforeDisjoint(other) || startsAfterDisjoint(other)
    }

    /** Are two intervals adjacent such as 0..41 and 42..42?  */
    adjacent(other: Interval): Boolean {
        return this.a == other.b + 1 || this.b == other.a - 1
    }

    properlyContains(other: Interval): Boolean {
        return other.a >= this.a && other.b <= this.b
    }

    /** Return the interconst computed from combining this and other  */
    union(other: Interval): Interval {
        return Interval.of(Math.min(a, other.a), Math.max(b, other.b))
    }

    /** Return the interconst in common between this and o  */
    intersection(other: Interval): Interval {
        return Interval.of(Math.max(a, other.a), Math.min(b, other.b))
    }

    /** Return the interconst with elements from this not in other;
     * other must not be totally enclosed (properly contained)
     * within this, which would result in two disjoint intervals
     * instead of the single one returned by this method.
     */
    differenceNotProperlyContained(other: Interval): Interval | undefined {
        diff: Interval? = null
        // other.a to left of this.a (or same)
        if (other.startsBeforeNonDisjoint(this)) {
            diff = Interval.of(Math.max(this.a, other.b + 1),
                    this.b)
        } else if (other.startsAfterNonDisjoint(this)) {
            diff = Interval.of(this.a, other.a - 1)
        }// other.a to right of this.a
        return diff
    }

    toString(): string {
        return a.toString() + ".." + b
    }

    // static
    // const INTERVAL_POOL_MAX_VALUE = 1000

    // const INVALID = Interval(-1, -2)

    // internal cache = arrayOfNulls<Interval>(INTERVAL_POOL_MAX_VALUE + 1)

    // creates = 0
    // misses = 0
    // hits = 0
    // outOfRange = 0

    // /** Interconst objects are used readonly so share all with the
    //  * same single value a==b up to some max size.  Use an array as a perfect hash.
    //  * Return shared object for 0..INTERVAL_POOL_MAX_VALUE or a new
    //  * Interconst object with a..a in it.  On Java.g4, 218623 IntervalSets
    //  * have a..a (set with 1 element).
    //  */
    // of(a: number, b: number): Interval {
    //     // cache just a..a
    //     if (a != b || a < 0 || a > INTERVAL_POOL_MAX_VALUE) {
    //         return Interval(a, b)
    //     }
    //     if (cache[a] == null) {
    //         cache[a] = Interval(a, a)
    //     }
    //     return cache[a]!!
    // }
}
